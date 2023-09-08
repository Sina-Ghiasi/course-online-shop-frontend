import Navigation from "../components/Navigation/Navigation";

const UserLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 h-full text-center">
      <Navigation />
      {children}
    </div>
  );
};

export default UserLayout;
