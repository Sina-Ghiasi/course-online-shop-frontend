import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="bg-slate-50 h-full">
      <nav>
        <Link className="block" to="/admin-panel/dashboard">
          پیشخوان
        </Link>
        <Link className="block" to="/admin-panel/users">
          کاربران
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
