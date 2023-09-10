import WelcomeUser from "../WelcomeUser";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-4 md:my-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold">پیشخوان</h1>
        <div>
          <WelcomeUser />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
