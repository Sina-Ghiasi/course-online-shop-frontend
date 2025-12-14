import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { signupUser } from "../../services/userServices";
import { useAuth } from "../../providers/AuthProvider";
import Input from "../common/Input";
import logo from "../../assets/img/logo-min.png";
import { saveOtpData } from "../../services/otpServices";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("نکمیل اسم مورد نیاز است")
    .min(6, "طول اسم مورد قبول نیست نام و نام خانوادگی خود را وارد نمایید"),
  email: Yup.string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("تکمیل ایمیل مورد نیاز است"),
  phoneNumber: Yup.string()
    .required("تکمیل شماره موبایل مورد نیاز است")
    .matches(/^[0-9]{11}$/, "شماره موبایل وارد شده نامعتبر است")
    .nullable(),
  password: Yup.string()
    .required("تکمیل رمز عبور مورد نیاز است")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "رمز عبور باید حداقل شامل 8 کاراکتر ، یکی بزرگ ، یکی کوچک \n یک شماره و یک کاراکتر ویژه باشد"
    ),
  passwordConfirm: Yup.string()
    .required("تکمیل تایید رمز عبور مورد نیاز است")
    .oneOf(
      [Yup.ref("password"), null],
      "تایید رمز عبور با رمز عبور مطابقت ندارد"
    ),
});

const SignupForm = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const navigate = useNavigate();
  const auth = useAuth();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (auth) navigate(redirect, { replace: true });
  }, [auth, navigate, redirect]);

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    try {
      const { data } = await signupUser({ name, email, phoneNumber, password });
      saveOtpData({ phoneNumber, token: data.token, type: "SIGNUP" });
      setError(null);
      navigate("/otp" + redirect);
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={"/"}>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
        </Link>

        <h2 className="my-5 text-center text-xl text-gray-900">
          ثبت نام حساب کاربری
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4 mb-4" onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="name" placeholder="نام و نام خانوادگی" />
          <Input
            formik={formik}
            name="email"
            type="email"
            placeholder="ایمیل"
          />
          <Input
            formik={formik}
            name="phoneNumber"
            type="tel"
            placeholder="شماره موبایل"
          />
          <Input
            formik={formik}
            name="password"
            type="password"
            placeholder="رمز ورود"
          />
          <Input
            formik={formik}
            name="passwordConfirm"
            type="password"
            placeholder="تایید رمز عبور"
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          >
            ثبت نام
          </button>
        </form>
        {error && <p className="text-red-700 text-sm text-right">{error}</p>}
        <p className="mt-10 text-center text-sm text-gray-600">
          حساب کاربری دارید ؟
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-lime-600 hover:text-lime-500 mr-2"
          >
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
