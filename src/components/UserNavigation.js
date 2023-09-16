import { Link, NavLink } from "react-router-dom";
import {
  UserIcon,
  ShoppingBagIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/img/logo-min.png";
import { useAuth } from "../providers/AuthProvider";
import { useState } from "react";

const UserNavigation = () => {
  const userData = useAuth();
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  return (
    <>
      <nav className="hidden md:block mb-6 shadow-sm sticky top-0 z-10 bg-neutral-50">
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
                    `py-2 text-gray-800 ${
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
                    `py-2 text-gray-800 ${
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
                    `py-2 text-gray-800 ${
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
                    `py-2 text-gray-800 ${
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
                isActive ? "text-lime-600" : "text-gray-800"
              }
            >
              <ShoppingBagIcon className="h-6 w-6" />
            </NavLink>

            <NavLink
              to={userData ? "/profile" : "/login"}
              className={({ isActive }) =>
                isActive ? "text-lime-600" : "text-gray-800"
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
      <nav className="md:hidden mb-6 shadow-sm sticky top-0 z-10 bg-neutral-50">
        <div className="container mx-auto p-3 flex items-center justify-between">
          <button
            className="px-1 ml-6"
            onClick={() => setIsMobileNavigationOpen(true)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div>
            <Link to={"/"}>
              <img className="mx-auto h-20 w-auto" src={logo} alt="Doryad" />
            </Link>
          </div>
          {/* mobile menu section  */}
          <div
            className={
              "w-60 h-screen flex flex-col items-center transition-all duration-300 absolute top-0 z-10 bg-neutral-50 shadow-md" +
              (isMobileNavigationOpen ? " right-0" : " -right-60")
            }
          >
            <button
              className="p-2 ml-auto mt-8 mr-2"
              onClick={() => setIsMobileNavigationOpen(false)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <ul className="flex items-center flex-col gap-y-4 lg:gap-x-8 lg:text-lg">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `py-1 text-gray-800 ${
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
                    `py-1 text-gray-800 ${
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
                    `py-1 text-gray-800 ${
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
                    `py-1 text-gray-800 ${
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
                isActive ? "text-lime-600" : "text-gray-800"
              }
            >
              <ShoppingBagIcon className="h-6 w-6" />
            </NavLink>

            <NavLink
              to={userData ? "/profile" : "/login"}
              className={({ isActive }) =>
                isActive ? "text-lime-600" : "text-gray800"
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
    </>
  );
};

export default UserNavigation;
