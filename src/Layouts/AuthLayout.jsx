import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-neutral-50 h-full min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
