import React, { useState } from "react";
import "./InfoModal.scss";

const InfoModal = ({ children, about }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="info-modal__button_open"
      >
        i
      </button>
      {isOpen && (
        <div className="info-modal__modal">
          <div className="info-modal__content-wrapper">
            <div className="info-modal__title">Understand {about}</div>
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
              Understood
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;
