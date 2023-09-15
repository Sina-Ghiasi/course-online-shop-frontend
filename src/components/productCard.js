import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <Link href="#">
        <img
          className="h-60 rounded-t-lg object-cover"
          src={product.image}
          alt="product"
        />
      </Link>
      {product.discount > 0 ? (
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-red-600 text-center text-sm text-white">
          تخفیف
        </span>
      ) : (
        ""
      )}

      <div className="mt-4 px-5 pb-5">
        <Link href="#" className="block mb-4">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {product.name}
          </h5>
        </Link>

        <div className="flex items-center justify-between">
          <p>
            {product.discount > 0 ? (
              <span className="text-xs text-slate-900 line-through inline-block ml-3">
                {product.price - product.price * product.discount}
              </span>
            ) : (
              ""
            )}
            <span className=" font-bold text-slate-900">
              {product.price} تومان
            </span>
          </p>
          <Link
            href="#"
            className="flex items-center rounded-md bg-lime-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-lime-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            ثبت نام دوره
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
