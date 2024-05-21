import { useRef } from "react";

export function useSowinHandRef() {
  const sowingHandRef = useRef(null);

  return sowingHandRef;
}
