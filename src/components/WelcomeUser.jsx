import { useAuth } from "../providers/AuthProvider";

const WelcomeUser = () => {
  const user = useAuth();
  return (
    <div className="px-2 py-1 md:px-3 md:py-2 text-sm md:text-base bg-neutral-50 rounded-md shadow-md">
      سلام {user.name}
    </div>
  );
};

export default WelcomeUser;
