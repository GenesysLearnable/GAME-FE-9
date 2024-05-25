import { useState } from "react";

export function useUserState() {
  const [user, setUser] = useState({});

  return {
    user,
    setUser,
  };
}
