import { getAllUsers, getUserData } from "../../services/userService";
import WelcomeUser from "../WelcomeUser";
import {
  PencilIcon,
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
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getUserData();
        const { data } = await getAllUsers(user.token);
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const showMoreHandler = (id) => {};
  const editHandler = (id) => {};
  const removeHandler = (id) => {};

  return (
    <div>
      <div className="mb-4 md:my-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold">کاربران</h1>
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
                  className="border-b-2 border-slate-300 bg-slate-50 p-3"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(
              ({ _id, name, phoneNumber, isAdmin, createdAt }, index) => (
                <tr key={name} className="even:bg-gray-100 text-sm">
                  <td className="p-3">{name}</td>
                  <td className="p-3">{phoneNumber}</td>
                  <td className="p-3">{isAdmin ? "مدیر" : "مشتری"}</td>
                  <td className="p-3">
                    {new Date(createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => {
                        showMoreHandler(_id);
                      }}
                    >
                      <DocumentMagnifyingGlassIcon className="h-5 w-5 mx-2 text-slate-900 hover:scale-105 duration-200" />
                    </button>
                    <button
                      onClick={() => {
                        editHandler(_id);
                      }}
                    >
                      <PencilIcon className="h-5 w-5  mx-2 text-slate-900 hover:scale-105 duration-200" />
                    </button>
                    <button
                      onClick={() => {
                        removeHandler(_id);
                      }}
                    >
                      <TrashIcon className="h-5 w-5  mx-2 text-red-700 hover:scale-105 duration-200" />
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

export default Users;
