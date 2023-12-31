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
    <nav className="bg-neutral-50 py-4 md:min-h-screen h-full">
      <div className="mb-5">
        <Link to={"/"}>
          <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
        </Link>
      </div>
      <ul className="flex justify-items-center flex-wrap md:flex-col gap-y-2 gap-x-4 lg:gap-x-8 lg:text-lg mb-2 mr-8">
        <li>
          <NavLink
            to={"/admin-panel/"}
            className={({ isActive }) =>
              `flex items-center  py-1 text-sm md:text-base text-gray-600 hover:text-gray-900 hover:font-semibold ${
                isActive ? "text-gray-900 font-semibold" : ""
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
              `flex items-center py-1 text-sm md:text-base text-gray-600 hover:text-gray-900 hover:font-semibold ${
                isActive ? "text-gray-900 font-semibold" : ""
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
              `flex items-center py-1 text-sm md:text-base text-gray-600 hover:text-gray-900 hover:font-semibold ${
                isActive ? "text-gray-900 font-semibold" : ""
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
              `flex items-center text-sm md:text-base py-1 text-gray-600 hover:text-gray-900 hover:font-semibold ${
                isActive ? "text-gray-900 font-semibold" : ""
              }`
            }
          >
            <InboxIcon className="h-5 w-5 ml-2" />
            سفارش ها
          </NavLink>
        </li>
        <li>
          <LogoutButton className="flex items-center text-sm md:text-base text-red-700 hover:text-red-500 hover:font-semibold">
            <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2" />
          </LogoutButton>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;
