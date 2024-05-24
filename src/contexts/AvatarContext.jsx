import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

const AvatarContext = createContext();

function AvatarContextProvider({ children }) {
  const [userData, setUserData] = useLocalStorageState({}, "userData");
  return (
    <AvatarContext.Provider value={{ userData, setUserData }}>
      {children}
    </AvatarContext.Provider>
  );
}

function useAvatar() {
  const context = useContext(AvatarContext);

  if (context === undefined) {
    throw new Error(
      "AvatarContext was used outsde the Avatar Context provider"
    );
  }

  return context;
}

export { AvatarContextProvider, useAvatar };
