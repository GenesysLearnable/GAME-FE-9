import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
<<<<<<< HEAD
  console.log(openName, name);
=======

>>>>>>> 82bc241 (modifying some components)
  if (name !== openName) return null;

  return createPortal(
    <div className="ugo-modal-overlay">
      <div className="ugo-modal" ref={ref}>
        <button className="ugo-close-button" onClick={close}>
          <HiXMark />
        </button>
<<<<<<< HEAD
        <div>{cloneElement(children, { onCloseModal: close })}</div>
=======
        {cloneElement(children, { onCloseModal: close })}
>>>>>>> 82bc241 (modifying some components)
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
