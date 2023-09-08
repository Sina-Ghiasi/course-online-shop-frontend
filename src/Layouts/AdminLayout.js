import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-full">
      <nav>
        <Link className="block" to="dashboard">
          پیشخوان
        </Link>
        <Link className="block" to="users">
          کاربران
        </Link>
      </nav>
    </div>
  );
};

export default AdminLayout;
