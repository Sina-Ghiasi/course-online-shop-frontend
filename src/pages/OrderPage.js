import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserData } from "../services/userServices";
import { getOrderById } from "../services/orderServices";

const tableHeaders = ["نام محصول", "قیمت نهایی", "درصد تخفیف"];

const OrderPage = () => {
  const [order, setOrder] = useState({});
  const { orderId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = getUserData();
        const { data } = await getOrderById(currentUser.token, orderId);
        setOrder(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [orderId]);
  return (
    <div className="md:my-5">
      <h1 className="text-base md:text-lg font-semibold mb-4">سفارش</h1>
      <div className="bg-clip-border rounded-lg bg-neutral-50 text-gray-800 shadow-md w-full p-3 mb-5">
        <div className="flex items-center flex-wrap gap-y-2">
          <div className="w-full md:w-1/2">
            نام کاربر : {order.userId ? order.userId.name : ""}
          </div>
          <div className="w-full md:w-1/2">
            نوع کاربر :{" "}
            {order.userId ? (order.userId.isAdmin ? "مدیر" : "مشتری") : ""}
          </div>
          <div className="w-full md:w-1/2">
            تاریخ سفارش :{new Date(order.createdAt).toLocaleDateString("fa-IR")}
          </div>
          <div className="w-full md:w-1/2">
            مبلغ کل سفارش : {order.totalPrice}
          </div>
          <div className="w-full">
            <table className="w-full min-w-max table-auto text-center">
              <thead>
                <tr>
                  {tableHeaders.map((head) => (
                    <th
                      key={head}
                      className="text-xs md:text-sm font-semibold border-b-2 border-gray-300 bg-neutral-50 p-2 md:p-3"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {order.orderItems
                  ? order.orderItems.map(
                      ({ _id, name, price, discount }, index) => (
                        <tr
                          key={_id}
                          className="even:bg-gray-100 text-xs md:text-sm"
                        >
                          <td className="p-2 md:p-3">{name}</td>
                          <td className="p-2 md:p-3">{price}</td>
                          <td className="p-2 md:p-3">{discount}</td>
                        </tr>
                      )
                    )
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Link
        to="/admin-panel/orders"
        className="flex w-fit justify-center mb-4 rounded-md bg-neutral-50 px-3 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-lime-600 hover:text-gray-100 outline outline-1 outline-offset-1 outline-lime-600"
      >
        برگشت به صفحه سفارش ها
      </Link>
    </div>
  );
};

export default OrderPage;
