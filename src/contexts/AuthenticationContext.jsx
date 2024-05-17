import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

const AuthContext = createContext();

function AuthenticationContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorageState(
    false,
    "isAuthenticated"
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Auth context was used outside the AuthContext provider");

  return context;
}

export { AuthenticationContext, useAuth };
