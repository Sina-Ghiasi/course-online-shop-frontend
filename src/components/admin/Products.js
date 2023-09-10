import WelcomeUser from "../WelcomeUser";

const Products = () => {
  return (
    <div>
      <div className="my-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold">محصولات</h1>
        <div>
          <WelcomeUser />
        </div>
      </div>
    </div>
  );
};

export default Products;
