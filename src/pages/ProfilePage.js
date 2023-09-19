import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
// import { getUserData } from "../services/userServices";

const tableHeaders = ["نام دوره", "تاریخ ثبت", "کد لایسنس دوره"];

const ProfilePage = () => {
  const navigate = useNavigate();
  const userData = useAuth();
  // const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (!userData) navigate(-1);
  }, [userData, navigate]);
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = getUserData();
        const { data } = await getAllOrders(currentUser.token);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  */
  return (
    <div className="container mx-auto p-3 flex items-start justify-between flex-wrap md:flex-nowrap gap-5 md:gap-10">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-md px-6 py-4 text-right">
        <h2 className="mb-4 text-lg">اطلاعات کاربری</h2>
        <ul className="space-y-2 mb-2">
          <li>نام و نام خانوادگی : {userData.name}</li>
          <li>ایمیل : {userData.email}</li>
          <li>شماره موبایل : {userData.phoneNumber}</li>
        </ul>
        <LogoutButton className="flex items-center text-sm md:text-base text-red-700 hover:text-red-500 hover:font-semibold">
          <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2" />
        </LogoutButton>
      </div>
      <div className="w-full min-h-[250px] md:min-h-[350px] md:w-2/3 lg:w-3/4 bg-white shadow-md rounded-md px-6 py-4 text-right">
        <h2 className="mb-6 text-lg">دوره های ثبت نام شده</h2>
        <div className="bg-clip-border rounded-md bg-neutral-50 text-gray-800 shadow-md w-full overflow-auto">
          <table className="w-full min-w-max table-auto text-center">
            <thead>
              <tr>
                {tableHeaders.map((head) => (
                  <th
                    key={head}
                    className="text-xs md:text-sm font-semibold border-b-2 border-gray-300 bg-neutral-50 p-2 md:p-3"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
