import { Link, NavLink } from "react-router-dom";
import {
  UserIcon,
  ShoppingBagIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/img/logo-min.png";
import { useAuth } from "../providers/AuthProvider";

const UserNavigation = () => {
  const userData = useAuth();
  return (
    <nav className="hidden md:block mb-6 shadow-sm sticky top-0 z-10 bg-slate-50">
      <div className="container mx-auto p-3 flex items-center justify-between">
        {/* menu section  */}
        <div className="flex items-center gap-x-12">
          <div>
            <Link to={"/"}>
              <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
            </Link>
          </div>
          <ul className="flex items-center gap-x-4 lg:gap-x-8 lg:text-lg">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `py-2 text-slate-800 ${
                    isActive
                      ? "border-b-2 border-lime-600"
                      : "hover:border-b-2 hover:border-lime-600"
                  }`
                }
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/courses"}
                className={({ isActive }) =>
                  `py-2 text-slate-800 ${
                    isActive
                      ? "border-b-2 border-lime-600"
                      : "hover:border-b-2 hover:border-lime-600"
                  }`
                }
              >
                دوره های آموزشی
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/learning-roadmap"}
                className={({ isActive }) =>
                  `py-2 text-slate-800 ${
                    isActive
                      ? "border-b-2 border-lime-600"
                      : "hover:border-b-2 hover:border-lime-600"
                  }`
                }
              >
                نقشه راه یادگیری
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about-us"}
                className={({ isActive }) =>
                  `py-2 text-slate-800 ${
                    isActive
                      ? "border-b-2 border-lime-600"
                      : "hover:border-b-2 hover:border-lime-600"
                  }`
                }
              >
                درباره ما
              </NavLink>
            </li>
          </ul>
        </div>
        {/* user section  */}
        <div className="flex items-center gap-x-3">
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? "text-lime-600" : "text-slate-800"
            }
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </NavLink>

          <NavLink
            to={userData ? "/profile" : "/login"}
            className={({ isActive }) =>
              isActive ? "text-lime-600" : "text-slate-800"
            }
          >
            {userData ? (
              <UserIcon className="h-6 w-6" />
            ) : (
              <ArrowLeftOnRectangleIcon className="h-6 w-6" />
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default UserNavigation;
