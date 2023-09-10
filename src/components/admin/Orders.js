import WelcomeUser from "../WelcomeUser";

const Orders = () => {
  return (
    <div>
      <div className="my-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold">سفارش ها</h1>
        <div>
          <WelcomeUser />
        </div>
      </div>
    </div>
  );
};

export default Orders;
