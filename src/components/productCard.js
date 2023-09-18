import { Link } from "react-router-dom";

const ProductCard = ({ product, className }) => {
  return (
    <div className={className}>
      {console.log(product)}
      <div className="relative h-60">
        <Link to={"/courses/" + product._id}>
          <img
            className="h-full object-cover mx-auto"
            src={product.image}
            alt="product"
          />
        </Link>
        {product.discount > 0 ? (
          <span className="absolute top-0 left-0 w-28 translate-y-6 -translate-x-6 -rotate-45 bg-red-600 text-center text-xs text-white">
            %{product.discount} تخفیف
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="mt-4 px-5 pb-5">
        <Link to={"/courses/" + product._id} className="block mb-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800">
            {product.name}
          </h5>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            {product.discount > 0 ? (
              <div className="text-xs text-gray-400 line-through inline-block ml-3">
                {product.price - product.price * product.discount}
              </div>
            ) : (
              ""
            )}

            <div className="font-bold text-gray-800">{product.price} تومان</div>
          </div>

          <Link
            to="#"
            className="rounded-md bg-lime-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-lime-500"
          >
            ثبت نام دوره
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
