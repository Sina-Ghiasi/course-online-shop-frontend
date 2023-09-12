import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productServices";
import ProductForm from "../components/forms/ProductForm";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (productId) {
      fetchData();
    }
  }, [productId]);
  const handleUpdate = (updatedProduct) => {
    setProduct(updatedProduct);
  };

  return (
    <div className="md:my-5">
      <h1 className="text-base md:text-lg font-semibold mb-4">محصول</h1>
      <ProductForm
        product={product}
        handleUpdate={handleUpdate}
        isAddMode={!productId}
      />

      <Link
        to="/admin-panel/products"
        className="flex w-fit justify-center mb-4 rounded-md bg-slate-50 px-3 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-lime-600 hover:text-slate-100 outline outline-1 outline-offset-1 outline-lime-600"
      >
        برگشت به صفحه محصولات
      </Link>
    </div>
  );
};

export default Product;
