import { useNavigate } from "react-router-dom";
import { getUserData } from "../services/userServices";
import WelcomeUser from "../components/WelcomeUser";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { deleteProductById, getAllProducts } from "../services/productServices";

const tableHeaders = [
  "نام",
  "قیمت",
  "درصد تخفیف",
  "تاریخ ایجاد",
  "عکس محصول",
  "عملکردها",
];
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const addNewHandler = () => {
    navigate("/admin-panel/products/add");
  };
  const editHandler = (id) => {
    navigate("/admin-panel/products/" + id);
  };
  const removeHandler = async (id) => {
    try {
      const currentUser = getUserData();
      const { data } = await deleteProductById(currentUser.token, id);
      const filteredProducts = products.filter(
        (product) => product._id !== data._id
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-4 md:my-5 flex items-center justify-between">
        <h1 className="text-base md:text-lg font-semibold">محصولات</h1>
        <div>
          <WelcomeUser />
        </div>
      </div>

      <button
        onClick={addNewHandler}
        className="flex w-fit rounded-md bg-lime-600 px-3 py-1.5  mb-4 text-sm font-semibold text-slate-100 shadow-sm hover:bg-lime-500 "
      >
        <PlusIcon className="h-4 w-4 md:h-5 md:w-5 ml-1 text-slate-50 hover:scale-105 duration-200" />
        اضافه کردن محصول
      </button>
      <div className="bg-clip-border rounded-md bg-slate-50 text-slate-800 shadow-md h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {tableHeaders.map((head) => (
                <th
                  key={head}
                  className="text-xs md:text-sm font-semibold border-b-2 border-slate-300 bg-slate-50 p-2 md:p-3"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map(
              ({ _id, name, price, discount, createdAt, image }, index) => (
                <tr key={_id} className="even:bg-gray-100 text-xs md:text-sm">
                  <td className="p-2 md:p-3">{name}</td>
                  <td className="p-2 md:p-3">{price} تومان</td>
                  <td className="p-2 md:p-3">{discount} %</td>
                  <td className="p-2 md:p-3">
                    {new Date(createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="text-center p-1">
                    {image ? (
                      <img
                        className="h-16 w-auto inline-block"
                        src={image}
                        alt="product"
                      />
                    ) : (
                      "بدون تصویر"
                    )}
                  </td>
                  <td className="p-2 md:p-3">
                    <button
                      onClick={() => {
                        editHandler(_id);
                      }}
                    >
                      <PencilIcon className="h-4 w-4 md:h-5 md:w-5 mx-2 text-slate-900 hover:scale-105 duration-200" />
                    </button>
                    <button
                      onClick={() => {
                        removeHandler(_id);
                      }}
                    >
                      <TrashIcon className="h-4 w-4 md:h-5 md:w-5 mx-2 text-red-700 hover:scale-105 duration-200" />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
