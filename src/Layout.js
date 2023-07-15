import Navigation from "./components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-50 text-center">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
