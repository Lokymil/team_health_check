import React, { useState } from "react";
import "./InfoModal.scss";

const InfoModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="info-modal__wrapper">
      <button
        onClick={() => setIsOpen(true)}
        className="info-modal__button_open"
      >
        i
      </button>
      {isOpen && (
        <div className="info-modal__modal">
          <div className="info-modal__content-wrapper">
            <button
              onClick={() => setIsOpen(false)}
              className="info-modal__button_close"
            >
              x
            </button>
            <div className="info-modal__content">{children}</div>
            <button
              onClick={() => setIsOpen(false)}
              className="info-modal__button_validate"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoModal;
