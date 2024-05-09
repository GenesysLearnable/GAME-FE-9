import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [position, setPosition] = useState(null);

  const open = (x, y) => setPosition({ x, y });
  const close = () => setPosition(null);

  return (
    <MenusContext.Provider value={{ position, open, close }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id, children }) {
  const { position, close, open } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const button = document.getElementById(id);
    if (!button) return;
    const rect = button.getBoundingClientRect();
    open(window.innerWidth - rect.width - rect.x, rect.y + rect.height + 8);
  }

  return (
    <button className="ugo-toggle" onClick={handleClick} id={id}>
      {children}
    </button>
  );
}

function Menu({ children }) {
  const { position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (!position) return null;

  return createPortal(
    <div
      className="ugo-menu"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      ref={ref}
    >
      {children}
    </div>,
    document.body
  );
}

export { Menus, Toggle, Menu };
