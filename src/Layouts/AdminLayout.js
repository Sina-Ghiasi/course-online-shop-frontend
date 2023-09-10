import { Outlet } from "react-router-dom";
import AdminNavigation from "../components/admin/AdminNavigation";

const AdminLayout = () => {
  return (
    <div className="bg-slate-100 flex flex-wrap md:flex-nowrap gap-2">
      <div className="w-full md:w-1/6">
        <AdminNavigation />
      </div>
      <div className="w-full md:w-5/6 px-4 py-2 md:p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
