import { Outlet } from "react-router-dom";
import UserNavigation from "../components/UserNavigation";

const UserLayout = () => {
  return (
    <div className="bg-slate-50 h-full text-center">
      <UserNavigation />
      <Outlet />
    </div>
  );
};

export default UserLayout;
