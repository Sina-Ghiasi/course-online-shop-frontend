import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-slate-50 h-full min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
