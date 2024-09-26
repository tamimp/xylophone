import React from "react";
import "./Modal.scss";

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>{message}</p>
        <button className="modal__close-button" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Modal;
