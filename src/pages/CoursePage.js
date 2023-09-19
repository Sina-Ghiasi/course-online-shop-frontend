import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productServices";
import { useCartActions } from "../providers/CartProvider";

const CoursePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
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

  return (
    <div className="container mx-auto px-6 md:px-3 mb-6">
      <div className="flex flex-wrap gap-y-6">
        <div className="w-full md:w-2/5 md:pl-6">
          <div className="flex flex-col">
            <div className="bg-neutral-50 rounded-md shadow-md mb-6">
              <img className="w-2/3 mx-auto" src={product.image} alt="course" />
            </div>

            <ul className="flex flex-col lg:flex-row text-center md:justify-between gap-y-1 text-sm">
              <li className="py-2 px-3 bg-neutral-50 rounded-md shadow-md">
                آموزش پروژه محور
              </li>
              <li className="py-2 px-3 bg-neutral-50 rounded-md shadow-md">
                دسترسی سریع و راحت
              </li>
              <li className="py-2 px-3 bg-neutral-50 rounded-md shadow-md">
                پشتیبانی مادام العمر
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <div className="flex flex-col bg-neutral-50 rounded-md shadow-md h-full p-3 md:p-6">
            <h1 className="text-base md:text-lg font-semibold mb-4">
              {product.name}
            </h1>
            <div className="md:mb-auto text-sm md:text-base">
              {product.summary}
            </div>

            <div className="flex justify-between items-center fixed bottom-0 right-0 left-0 md:relative py-3 px-2 bg-neutral-50 border-t border-gray-200 md:border-none">
              <div className="text-sm md:font-bold md:text-lg text-gray-800 flex flex-wrap items-center">
                <div className="ml-1">قیمت دوره :</div>
                {product.discount > 0 ? (
                  <div className=" text-gray-400 line-through mx-3">
                    {product.price - product.price * product.discount}
                  </div>
                ) : (
                  ""
                )}
                <div>{product.price} تومان</div>
              </div>
              <button
                onClick={() => addProductHandler(product)}
                className="w-fit rounded-md bg-lime-600 px-3 md:px-5 py-1.5 md:py-3 text-center text-sm font-semibold text-white hover:bg-lime-500"
              >
                ثبت نام در دوره
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col bg-neutral-50 rounded-md shadow-md p-3 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-4">
              توضیحات دوره
            </h3>
            <p className="text-justify">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
