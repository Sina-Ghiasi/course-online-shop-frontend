import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import { createProduct, updateProduct } from "../../services/productServices";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../services/userServices";

const validationSchema = Yup.object({
  name: Yup.string().required("تکمیل اسم مورد نیاز است"),
  description: Yup.string(),
  price: Yup.number().required("تکمیل قیمت مورد نیاز است"),
  discount: Yup.number()
    .min(0, "درصد اشتباه وارد شده است")
    .max(100, "درصد اشتباه وارد شده است"),
  image: Yup.string(),
});

const ProductForm = ({ product, isAddMode }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    name: product.name || "",
    description: product.description || "",
    price: product.price || "",
    discount: product.discount || 0,
    image: product.image || "",
  };
  const onSubmit = async (values) => {
    try {
      const currentUser = getUserData();
      if (isAddMode) {
        await createProduct(currentUser.token, values);
        setError(null);
        navigate("/admin-panel/products");
      } else {
        const updateReq = {
          productId: product._id,
          ...values,
        };
        await updateProduct(currentUser.token, updateReq);
        setError(null);
        navigate("/admin-panel/products");
      }
    } catch (error) {
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  return (
    <div className="bg-clip-border rounded-lg bg-slate-50 text-slate-800 shadow-md w-full p-3 mb-5">
      <form className="mb-3" onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          name="name"
          type="text"
          placeholder="نام محصول"
        />
        <Textarea
          formik={formik}
          name="description"
          placeholder="توضیحات"
          rows="5"
        />
        <Input formik={formik} name="price" type="number" placeholder="قیمت" />
        <Input
          formik={formik}
          name="discount"
          type="number"
          placeholder="درصد تخفیف"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="flex justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold text-slate-100 shadow-sm hover:bg-lime-500 "
        >
          {isAddMode ? "انتشار محصول جدید" : "بروزرسانی محصول"}
        </button>
      </form>
      {error && <p className="text-red-700 text-sm text-right">{error}</p>}
    </div>
  );
};

export default ProductForm;
