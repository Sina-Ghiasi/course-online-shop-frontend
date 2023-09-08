import { useEffect } from "react";
import UserLayout from "../Layouts/UserLayout";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const userData = useAuth();

  useEffect(() => {
    if (!userData) navigate(-1);
  }, [userData, navigate]);

  return (
    <UserLayout>
      <h2 className="mb-6 text-lg">اطلاعات کاربری</h2>
      <ul className="space-y-2">
        <li>نام و نام خانوادگی : {userData.name}</li>
        <li>ایمیل : {userData.email}</li>
        <li>شماره موبایل : {userData.phoneNumber}</li>
      </ul>
    </UserLayout>
  );
};

export default ProfilePage;
