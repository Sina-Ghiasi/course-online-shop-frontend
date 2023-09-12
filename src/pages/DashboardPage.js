import { useEffect, useState } from "react";
import WelcomeUser from "../components/WelcomeUser";
import {
  getNumberOfOrders,
  getNumberOfOrdersBetween,
} from "../services/orderServices";
import { getNumberOfProducts } from "../services/productServices";
import { getNumberOfUsers, getUserData } from "../services/userServices";

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = getUserData();
      const currentTime = new Date().getTime();

      const totalUsersCount = (await getNumberOfUsers(currentUser.token)).data;
      const totalProductsCount = (await getNumberOfProducts(currentUser.token))
        .data;
      const totalOrdersCount = (await getNumberOfOrders(currentUser.token))
        .data;
      const last24HoursOrdersCount = (
        await getNumberOfOrdersBetween(currentUser.token, {
          lt: currentTime,
          gt: currentTime - 24 * 60 * 60,
        })
      ).data;

      setDashboardData({
        totalUsersCount,
        totalProductsCount,
        totalOrdersCount,
        last24HoursOrdersCount,
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-4 md:my-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold">پیشخوان</h1>
        <div>
          <WelcomeUser />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:w-5/6 mx-auto text-sm md:text-base">
        <div className="flex items-center justify-center h-10 p-3 md:h-[200px] bg-slate-50 rounded-md shadow-md">
          تعداد کل کاربران : {dashboardData.totalUsersCount}
        </div>
        <div className="flex items-center justify-center h-10 p-3 md:h-[200px] bg-slate-50 rounded-md shadow-md">
          تعداد کل محصولات : {dashboardData.totalProductsCount}
        </div>
        <div className="flex items-center justify-center h-10 p-3 md:h-[200px] bg-slate-50 rounded-md shadow-md">
          تعداد کل سفارشات : {dashboardData.totalOrdersCount}
        </div>
        <div className="flex items-center justify-center h-10 p-3 md:h-[200px] bg-slate-50 rounded-md shadow-md">
          تعداد سفارشات 24 ساعت گذشته : {dashboardData.last24HoursOrdersCount}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
