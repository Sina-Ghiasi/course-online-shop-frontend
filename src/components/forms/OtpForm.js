import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../assets/img/logo-min.png";
import {
  getOtpData,
  removeOtpData,
  verifyOtp,
} from "../../services/otpServices";
import { useAuthActions } from "../../providers/AuthProvider";
import { saveResetPassData } from "../../services/resetPassServices";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  otp: Yup.array().of(Yup.string().required()),
});

const OtpForm = ({ inputNum = 6 }) => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const navigate = useNavigate();
  const setAuth = useAuthActions();

  useEffect(() => {
    const otpData = getOtpData();
    if (!otpData) navigate("/", { replace: true });
  }, [navigate]);
  const cancelOtp = () => {
    removeOtpData();
    navigate("/login" + redirect, { replace: true });
  };
  const onSubmit = async (values) => {
    const otp = values.otp.join("");
    const { phoneNumber, token, type } = getOtpData();
    try {
      const { data } = await verifyOtp({ phoneNumber, otp }, token);
      switch (type) {
        case "SIGNUP":
        case "LOGIN":
          setAuth(data);
          removeOtpData();
          if (data.isAdmin) navigate("/admin-panel", { replace: true });
          else navigate(redirect, { replace: true });
          break;
        case "RESET_PASS":
          removeOtpData();
          saveResetPassData({
            userId: data.userId,
            token: data.token,
          });
          navigate("/reset-pass" + redirect);
          break;
        default:
          removeOtpData();
          throw new Error();
      }
    } catch (error) {
      if (error.response && error.response.data.message)
        toast.error(error.response.data.message);
      else console.log(error);
      setTimeout(() => {
        navigate("/login" + redirect);
      }, 3000);
    }
  };

  const formik = useFormik({
    initialValues: { otp: Array.from({ length: inputNum }).fill("") },
    onSubmit,
    validationSchema,
  });

  const inputsRef = useRef({});
  useEffect(() => {
    const inputs = inputsRef.current;
    inputs[0].focus();
    window.addEventListener("paste", pasteText);

    return () => window.removeEventListener("paste", pasteText);

    // we want doing above things only on mount and unmount so
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pasteText = (event) => {
    const pastedText = event.clipboardData.getData("text");
    const fieldValues = [];

    formik.values.otp.forEach((value, index) => {
      fieldValues.push(pastedText[index]);
    });

    formik.setValues((prev) => ({
      ...prev,
      otp: fieldValues,
    }));
    inputsRef.current[inputNum - 1].focus();
  };

  const handelChange = (event, index) => {
    const { value } = event.target;

    if (/[a-z]/gi.test(value)) return;

    const currentOtp = [...formik.values.otp];
    currentOtp[index] = value.slice(-1);

    formik.setValues((prev) => ({
      ...prev,
      otp: currentOtp,
    }));

    if (value && index < inputNum - 1) inputsRef.current[index + 1].focus();
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && index > 0)
      inputsRef.current[index - 1].focus();
  };

  const renderOtpInput = () => {
    return formik.values.otp.map((value, index) => (
      <input
        className="w-9 md:w-12 text-lg text-center md:text-xl py-1.5 mx-1 md:mx-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600"
        type="text"
        name={index}
        ref={(element) => (inputsRef.current[index] = element)}
        value={value}
        key={index}
        onChange={(event) => handelChange(event, index)}
        onKeyUp={(event) => handleBackspace(event, index)}
      />
    ));
  };
  return (
    <div className="h-screen flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={"/"}>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
        </Link>

        <h2 className="my-3 md:my-4 text-center text-lg md:text-xl text-gray-900">
          لطفا رمز یکبار مصرف ارسال شده را وارد نمایید
        </h2>
      </div>

      <form
        className="my-3 md:my-4  flex flex-col items-center"
        onSubmit={formik.handleSubmit}
      >
        <div dir="ltr" className="mb-2 md:mb-4 ">
          {renderOtpInput()}
        </div>

        <div className="h-5 text-red-700 text-sm text-right">
          {formik.errors["otp"] && " رمز عبور یکبار مصرف را تکمیل نمایید"}
        </div>

        <div className="flex justify-between items-center mt-4 w-2/3 md:w-1/5">
          <button
            onClick={cancelOtp}
            className="w-fit rounded-md bg-neutral-50 px-4 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-red-700 hover:text-gray-100 outline outline-1 outline-offset-1 outline-red-700"
          >
            لغو
          </button>
          <button
            type="submit"
            className="w-fit rounded-md bg-lime-600 px-4 py-1.5 font-semibold text-gray-100 shadow-sm hover:bg-lime-500 "
          >
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
