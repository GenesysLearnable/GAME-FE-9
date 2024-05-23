import { cloneElement } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function WinModal({ children, close, setClose }) {
  return createPortal(
    <div className="ugo-modal-overlay">
      <div className="ugo-modal">
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

export default WinModal;
