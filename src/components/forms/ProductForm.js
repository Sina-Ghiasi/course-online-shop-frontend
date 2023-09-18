import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import { createProduct, updateProduct } from "../../services/productServices";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../services/userServices";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("تکمیل اسم مورد نیاز است"),
  description: Yup.string(),
  price: Yup.number().required("تکمیل قیمت مورد نیاز است"),
  discount: Yup.number()
    .min(0, "درصد اشتباه وارد شده است")
    .max(100, "درصد اشتباه وارد شده است"),
  image: Yup.string(),
});

const ProductForm = ({ product, handleUpdate, isAddMode }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    name: product.name || "",
    description: product.description || "",
    summary: product.summary || "",
    price: product.price || "",
    discount: product.discount || 0,
    image: "",
  };
  const onSubmit = async (values) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const currentUser = getUserData();
    if (isAddMode) {
      try {
        await createProduct(currentUser.token, formData);
        setError(null);
        navigate("/admin-panel/products");
      } catch (error) {
        if (error.response && error.response.data.message)
          setError(error.response.data.message);
        else {
          setError("انتشار محصول نا موفق ، دوباره امتحان کنید");
        }
      }
    } else {
      try {
        formData.append("productId", product._id);

        const { data } = await updateProduct(currentUser.token, formData);
        handleUpdate(data);
        toast.success("آپدیت با موفقیت انجام شد");
        setError(null);
      } catch (error) {
        if (error.response && error.response.data.message)
          setError(error.response.data.message);
        else {
          setError("بروزرسانی محصول نا موفق ، دوباره امتحان کنید");
        }
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
  });

  return (
    <div className="bg-clip-border rounded-lg bg-neutral-50 text-gray-900 shadow-md w-full p-3 md:px-6 md:py-4 mb-5">
      <form
        className="mb-3 flex justify-between flex-wrap gap-y-3"
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
      >
        <Input
          formik={formik}
          name="name"
          type="text"
          label="نام محصول"
          placeholder="نام محصول"
          className="w-full"
        />

        <Textarea
          formik={formik}
          name="summary"
          placeholder="توضیحات خلاصه"
          label="توضیحات خلاصه"
          rows="10"
          className="w-full md:w-2/3"
        />
        <div className="w-full md:w-1/3 flex flex-col items-center md:pr-3">
          <label
            htmlFor="image"
            className="block w-full mb-2 text-sm font-medium text-gray-900 "
          >
            عکس محصول
            {product.image && (
              <img
                src={product.image}
                alt="product"
                className="p-2 mx-auto h-44"
              />
            )}
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) =>
              formik.setFieldValue("image", e.currentTarget.files[0])
            }
            className="block w-full file:cursor-pointer rounded-md shadow-sm border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 text-gray-900 file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-50 hover:file:bg-lime-600 file:text-gray-900 hover:file:text-gray-100 file:px-3 file:py-[0.32rem] file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]  focus:outline-1 focus:outline-lime-600 "
          />
          <p className="mt-1 text-sm text-gray-500 ">
            PNG, JPG ( سایز بهینه : 1024x1024px)
          </p>
        </div>
        <Textarea
          formik={formik}
          name="description"
          placeholder="توضیحات"
          label="توضیحات"
          rows="12"
          className="w-full"
        />
        <Input
          formik={formik}
          name="price"
          type="number"
          placeholder="قیمت"
          label="قیمت (تومان)"
          className="md:w-2/4"
        />
        <Input
          formik={formik}
          name="discount"
          type="number"
          placeholder="درصد تخفیف"
          label="درصد تخفیف"
          className="md:w-1/4"
        />

        <button
          type="submit"
          disabled={!formik.isValid}
          className="flex justify-center self-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-lime-500 "
        >
          {isAddMode ? "انتشار محصول جدید" : "بروزرسانی محصول"}
        </button>
      </form>
      {error && <p className="text-red-700 text-sm text-right">{error}</p>}
    </div>
  );
};

export default ProductForm;
