import { useAuth } from "../providers/AuthProvider";

const WelcomeUser = () => {
  const user = useAuth();
  return (
    <div className="px-3 py-2 text-base bg-slate-50 rounded-md shadow-md">
      سلام {user.name}
    </div>
  );
};

export default WelcomeUser;
