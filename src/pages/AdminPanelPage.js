import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useEffect } from "react";

const AdminPanelPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (!auth || !auth.isAdmin) navigate("/", { replace: true });
  }, [auth, navigate]);

  return <Outlet />;
};

export default AdminPanelPage;
