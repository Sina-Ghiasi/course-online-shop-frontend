import { useCart, useCartActions } from "../providers/CartProvider";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { makeOrder } from "../services/orderServices";
import { getUserData } from "../services/userServices";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const checkoutHandler = async () => {
    const currentUser = getUserData();

    try {
      await makeOrder(currentUser.token, {
        phoneNumber: currentUser.phoneNumber,
        productIds: cart.map((item) => item._id),
      });
    } catch (error) {
      if (error.response && error.response.data.message)
        toast.error(error.response.data.message);
      else {
        console.log(error);
      }
    }
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: cartItem });
  };
  const totalAfterDiscount = cart.length
    ? cart.reduce(
        (acc, curr) => acc + curr.price - curr.price * (curr.discount / 100),
        0
      )
    : 0;

  if (!cart.length)
    return (
      <div className="container mx-auto px-6 md:px-3 mb-6">
        <div className="flex justify-center items-center md:h-56">
          <h2 className="font-semibold text-lg">
            شما هیچ دوره ای را انتخاب نکرده اید
          </h2>
        </div>
      </div>
    );
  return (
    <div className="container mx-auto px-6 md:px-3 mb-6">
      <div className="flex flex-wrap gap-y-6">
        <div className="w-full md:w-3/4 md:pl-6">
          <div className="flex flex-col gap-y-4 md:gap-y-0 bg-neutral-50 rounded-md shadow-md p-3 md:p-6">
            {cart.map((item) => {
              return (
                <div
                  className="flex items-center justify-between text-sm md:text-base"
                  key={item._id}
                >
                  <div className="hidden md:block p-1">
                    <img
                      className="h-20 w-auto mc-auto"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="w-1/4">{item.name}</div>
                  <div>{item.price} تومان</div>
                  <button onClick={() => decHandler(item)}>
                    <XCircleIcon className="h-6 w-6 text-red-700" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/4 md:pl-6">
          <div className="bg-neutral-50 rounded-md shadow-md p-3 ">
            <div className="space-y-2 mb-6">
              <h2 className="font-semibold text-center">خلاصه سبد خرید</h2>
              <div className="flex items-center text-sm lg:text-base">
                <div className="ml-1">قیمت کل :</div>
                <div>{total} تومان</div>
              </div>
              <div className="flex items-center text-sm lg:text-base">
                <div className="ml-1">تخفیف :</div>
                <div>{total - totalAfterDiscount} تومان</div>
              </div>
              <div className="flex items-center text-sm lg:text-base">
                <div className="ml-1">قیمت کل نهایی :</div>
                <div>{totalAfterDiscount} تومان</div>
              </div>
            </div>
            <button
              onClick={checkoutHandler}
              className="w-full rounded-md bg-lime-600 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-lime-500"
            >
              پرداخت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
