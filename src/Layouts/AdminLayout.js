import { Outlet } from "react-router-dom";
import AdminNavigation from "../components/AdminNavigation";

const AdminLayout = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-wrap md:flex-nowrap gap-2 max-w-screen-2xl mx-auto">
        <div className="w-full md:w-1/6">
          <AdminNavigation />
        </div>
        <div className="w-full md:w-5/6 px-4 py-2 md:p-5 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
