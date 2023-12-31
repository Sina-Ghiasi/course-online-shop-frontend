import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../services/userServices";
import { useAuth, useAuthActions } from "../../providers/AuthProvider";
import Input from "../common/Input";
import logo from "../../assets/img/logo-min.png";
import { generateOtp, saveOtpData } from "../../services/otpServices";
import { toast } from "react-toastify";

const initialValues = {
  phoneNumber: "",
  password: "",
};

const validationSchema = Yup.object({
  phoneNumber: Yup.string().required("تکمیل شماره موبایل مورد نیاز است"),
  password: Yup.string().required("تکمیل پسورد مورد نیاز است"),
});

const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const navigate = useNavigate();
  const auth = useAuth();
  const setAuth = useAuthActions();

  useEffect(() => {
    if (auth) navigate(redirect, { replace: true });
  }, [auth, navigate, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);

      if (data.isAdmin) navigate("/admin-panel", { replace: true });
      else navigate(redirect, { replace: true });
    } catch (error) {
      if (error.response && error.response.data.message)
        toast.error(error.response.data.message);
      else console.log(error);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const otpLogin = async () => {
    const { phoneNumber } = formik.values;
    try {
      const { data } = await generateOtp({ phoneNumber, type: "LOGIN" });
      saveOtpData({ phoneNumber, token: data.token, type: "LOGIN" });
      navigate("/otp" + redirect);
    } catch (error) {
      if (error.response && error.response.data.message)
        toast.error(error.response.data.message);
      else console.log(error);
    }
  };
  const resetPass = async () => {
    const { phoneNumber } = formik.values;
    try {
      const { data } = await generateOtp({ phoneNumber, type: "RESET_PASS" });
      saveOtpData({ phoneNumber, token: data.token, type: "RESET_PASS" });
      navigate("/otp" + redirect);
    } catch (error) {
      if (error.response && error.response.data.message)
        toast.error(error.response.data.message);
      else console.log(error);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={"/"}>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
        </Link>

        <h2 className="my-3 md:my-4 text-center text-lg md:text-xl text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="my-3 md:my-4 space-y-4" onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            name="phoneNumber"
            type="text"
            placeholder="شماره موبایل"
          />

          <Input
            formik={formik}
            name="password"
            type="password"
            placeholder="رمز ورود"
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-lime-500 "
          >
            ورود
          </button>
        </form>

        <button
          onClick={resetPass}
          className="block mb-3 font-semibold text-sm text-lime-600 hover:text-lime-500"
        >
          فراموشی رمز عبور ؟
        </button>
        <button
          onClick={otpLogin}
          className="flex w-full justify-center mb-4 rounded-md bg-neutral-50 px-3 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-lime-600 hover:text-gray-100 outline outline-1 outline-offset-1 outline-lime-600"
        >
          ورود با رمز یکبار مصرف
        </button>

        <p className="mt-10 text-center text-sm text-gray-600">
          کاربر جدید ؟
          <Link
            to={`/signup?redirect=${redirect}`}
            className="font-semibold leading-6 text-lime-600 hover:text-lime-500 mr-2"
          >
            ثبت نام
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
