import { useNavigate } from "react-router-dom";
import {
  deleteUserById,
  getAllUsers,
  getUserData,
} from "../services/userServices";
import WelcomeUser from "../components/WelcomeUser";
import {
  TrashIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const tableHeaders = [
  "نام",
  "شماره موبایل",
  "نوع کاربر",
  "تاریخ عضویت",
  "عملکردها",
];
const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = getUserData();
        const { data } = await getAllUsers(currentUser.token);
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const showMoreHandler = (id) => {
    navigate("/admin-panel/users/" + id);
  };

  const removeHandler = async (id) => {
    try {
      const currentUser = getUserData();
      const { data } = await deleteUserById(currentUser.token, id);
      const filteredUsers = users.filter((user) => user._id !== data._id);
      setUsers(filteredUsers);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-4 md:my-5 flex items-center justify-between">
        <h1 className="text-base md:text-lg font-semibold">کاربران</h1>
        <div>
          <WelcomeUser />
        </div>
      </div>
      <div className="bg-clip-border rounded-lg bg-slate-50 text-slate-800 shadow-md h-full w-full overflow-auto">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {tableHeaders.map((head) => (
                <th
                  key={head}
                  className="text-xs md:text-sm font-semibold border-b-2 border-slate-300 bg-slate-50 p-2 md:p-3"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ _id, name, phoneNumber, isAdmin, createdAt }, index) => (
                <tr key={_id} className="even:bg-gray-100 text-xs md:text-sm">
                  <td className="p-2 md:p-3">{name}</td>
                  <td className="p-2 md:p-3">{phoneNumber}</td>
                  <td className="p-2 md:p-3">{isAdmin ? "مدیر" : "مشتری"}</td>
                  <td className="p-2 md:p-3">
                    {new Date(createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="p-2 md:p-3">
                    <button
                      onClick={() => {
                        showMoreHandler(_id);
                      }}
                    >
                      <DocumentMagnifyingGlassIcon className="h-4 w-4 md:h-5 md:w-5 mx-2 text-slate-900 hover:scale-105 duration-200" />
                    </button>
                    <button
                      onClick={() => {
                        removeHandler(_id);
                      }}
                    >
                      <TrashIcon className="h-4 w-4 md:h-5 md:w-5 mx-2 text-red-700 hover:scale-105 duration-200" />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
