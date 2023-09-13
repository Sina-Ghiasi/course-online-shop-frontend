import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo-min.png";
import {
  HomeIcon,
  UsersIcon,
  Square2StackIcon,
  InboxIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import LogoutButton from "./LogoutButton";
const AdminNavigation = () => {
  return (
    <nav className="bg-slate-50 py-4 md:min-h-screen h-full">
      <div className="mb-5">
        <Link to={"/"}>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
        </Link>
      </div>
      <ul className="flex justify-items-center flex-wrap md:flex-col gap-x-4 lg:gap-x-8 lg:text-lg mb-2">
        <li>
          <NavLink
            to={"/admin-panel/"}
            className={({ isActive }) =>
              `flex items-center mr-8 py-1 text-sm md:text-base text-slate-600 hover:text-slate-900 hover:font-semibold ${
                isActive ? "text-slate-900 font-semibold" : ""
              }`
            }
          >
            <HomeIcon className="h-5 w-5 ml-2" />
            پیشخوان
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin-panel/users"}
            className={({ isActive }) =>
              `flex items-center mr-8 py-1 text-sm md:text-base text-slate-600 hover:text-slate-900 hover:font-semibold ${
                isActive ? "text-slate-900 font-semibold" : ""
              }`
            }
          >
            <UsersIcon className="h-5 w-5 ml-2" />
            کاربران
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin-panel/products"}
            className={({ isActive }) =>
              `flex items-center mr-8 py-1 text-sm md:text-base text-slate-600 hover:text-slate-900 hover:font-semibold ${
                isActive ? "text-slate-900 font-semibold" : ""
              }`
            }
          >
            <Square2StackIcon className="h-5 w-5 ml-2" />
            محصولات
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/admin-panel/orders"}
            className={({ isActive }) =>
              `flex items-center text-sm md:text-base mr-8 py-1 text-slate-600 hover:text-slate-900 hover:font-semibold ${
                isActive ? "text-slate-900 font-semibold" : ""
              }`
            }
          >
            <InboxIcon className="h-5 w-5 ml-2" />
            سفارش ها
          </NavLink>
        </li>
      </ul>

      <LogoutButton className="flex items-center mr-8 text-sm md:text-base text-red-700 hover:text-red-500 hover:font-semibold">
        <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2" />
      </LogoutButton>
    </nav>
  );
};

export default AdminNavigation;
