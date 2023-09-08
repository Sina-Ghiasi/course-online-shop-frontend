import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../common/Input";
import logo from "../../assets/img/logo-min.png";
import {
  getResetPassData,
  removeResetPassData,
  resetPass,
} from "../../services/resetPassService";
import { useAuthActions } from "../../providers/AuthProvider";

const initialValues = {
  newPassword: "",
  newPasswordConfirm: "",
};

const validationSchema = Yup.object({
  newPassword: Yup.string()
    .required("تکمیل رمز عبور مورد نیاز است")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "رمز عبور باید حداقل شامل 8 کاراکتر ، یکی بزرگ ، یکی کوچک \n یک شماره و یک کاراکتر ویژه باشد"
    ),
  newPasswordConfirm: Yup.string()
    .required("تکمیل تایید رمز عبور مورد نیاز است")
    .oneOf(
      [Yup.ref("newPassword"), null],
      "تایید رمز عبور با رمز عبور مطابقت ندارد"
    ),
});

const ResetPassForm = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);

  useEffect(() => {
    const resetPassData = getResetPassData();
    if (!resetPassData) navigate("/", { replace: true });
  }, [navigate]);

  const onSubmit = async (values) => {
    const { newPassword } = values;
    const { userId, token } = getResetPassData();
    try {
      const { data } = await resetPass({ userId, newPassword }, token);
      setAuth(data);
      setError(null);
      removeResetPassData();
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

        <h2 className="my-5 text-center text-xl text-gray-900">
          تغییر رمز عبور
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4 mb-4" onSubmit={formik.handleSubmit}>
          <Input
            formik={formik}
            name="newPassword"
            type="password"
            placeholder="رمز ورود جدید"
          />
          <Input
            formik={formik}
            name="newPasswordConfirm"
            type="password"
            placeholder="تایید رمز عبور جدید"
          />
          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={!formik.isValid}
            className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          >
            ثبت
          </button>
        </form>
        {error && <p className="text-red-700 text-sm text-right">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassForm;
