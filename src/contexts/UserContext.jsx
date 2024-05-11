import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserData() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("UserContext was used outside of UserContextProvider");

  return context;
}

export { UserContextProvider, useUserData };
