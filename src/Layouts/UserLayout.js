import Navigation from "../components/Navigation/Navigation";

const UserLayout = ({ children }) => {
  return (
    <div className="bg-slate-50 text-center">
      <Navigation />
      {children}
    </div>
  );
};

export default UserLayout;
