import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../services/loginService";
import { useAuth, useAuthActions } from "../../providers/AuthProvider";
import Input from "../Input/Input";
import logo from "../../assets/img/logo-min.png";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("تکمیل ایمیل مورد نیاز است"),
  password: Yup.string().required("تکمیل پسورد مورد نیاز است"),
});

const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const navigate = useNavigate();
  const auth = useAuth();
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (auth) navigate(redirect, { replace: true });
  }, [auth, navigate, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setError(null);
      navigate(redirect, { replace: true });
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

        <h2 className="my-4 text-center text-2xl font-bold text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="my-4 space-y-4" onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            name="email"
            type="email"
            placeholder="ایمیل"
          />

          <Input
            formik={formik}
            name="password"
            type="password"
            placeholder="رمز ورود"
          />

          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={!formik.isValid}
            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-lime-500 "
          >
            ورود
          </button>
        </form>
        <Link
          className="block mb-3 font-semibold text-sm text-lime-600 hover:text-lime-500"
          to={"#"}
        >
          فراموشی رمز عبور ؟
        </Link>
        <Link
          to={"/otpAuth"}
          className="flex w-full justify-center mb-4 rounded-md bg-slate-50 px-3 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-lime-600 hover:text-slate-100 outline outline-1 outline-offset-2 outline-lime-600"
        >
          ورود با رمز یکبار مصرف
        </Link>
        {error && <p className="text-red-700 text-sm text-right">{error}</p>}
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
