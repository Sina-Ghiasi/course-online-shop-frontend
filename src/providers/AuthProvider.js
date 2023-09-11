import { createContext, useContext, useEffect, useState } from "react";
import { getUserData, saveUserData } from "../services/userServices";

const AuthProviderContext = createContext();
const AuthProviderContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getUserData());

  // change user localStorage auth on auth state changing
  useEffect(() => {
    saveUserData(auth);
  }, [auth]);

  return (
    <AuthProviderContext.Provider value={auth}>
      <AuthProviderContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
