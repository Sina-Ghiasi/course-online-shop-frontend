import { useAuthActions } from "../providers/AuthProvider";

const LogoutButton = ({ className, children }) => {
  const setAuth = useAuthActions();
  const signOut = () => {
    setAuth(false);
  };
  return (
    <button className={className} onClick={() => signOut()}>
      {children}
      خروج
    </button>
  );
};

export default LogoutButton;
