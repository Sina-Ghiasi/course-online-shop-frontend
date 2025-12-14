import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById, getUserData } from "../services/userServices";

const UserPage = () => {
  const [user, setUser] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = getUserData();
        const { data } = await getUserById(currentUser.token, userId);
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="md:my-5">
      <h1 className="text-base md:text-lg font-semibold mb-4">کاربر</h1>
      <div className="bg-clip-border rounded-lg bg-neutral-50 text-gray-800 shadow-md w-full p-3 mb-5">
        <div className="flex items-center flex-wrap gap-y-2">
          <div className="md:w-1/2">نام : {user.name}</div>
          <div className="md:w-1/2">
            تاریخ عضویت : {new Date(user.createdAt).toLocaleDateString("fa-IR")}
          </div>
          <div className="md:w-1/2"> شماره موبایل : {user.phoneNumber}</div>
          <div className="md:w-1/2">ایمیل : {user.email}</div>
        </div>
      </div>

      <Link
        to="/admin-panel/users"
        className="flex w-fit justify-center mb-4 rounded-md bg-neutral-50 px-3 py-1.5 text-sm hover:font-semibold text-gray-900 shadow-sm hover:bg-lime-600 hover:text-gray-100 outline outline-1 outline-offset-1 outline-lime-600"
      >
        برگشت به صفحه کاربران
      </Link>
    </div>
  );
};

export default UserPage;
