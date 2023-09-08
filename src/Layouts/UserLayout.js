import UserNavigation from "../components/UserNavigation";

const UserLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-full text-center">
      <UserNavigation />
      {children}
    </div>
  );
};

export default UserLayout;
