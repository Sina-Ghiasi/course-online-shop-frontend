import { Outlet } from "react-router-dom";
import UserNavigation from "../components/UserNavigation";
import UserFooter from "../components/UserFooter";

const UserLayout = () => {
  return (
    <div className="bg-slate-50 h-full min-h-screen">
      <UserNavigation />
      <Outlet />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
