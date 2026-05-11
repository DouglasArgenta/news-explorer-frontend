import { useEffect } from "react";
import "./PopupWithForm.css";

function PopupWithForm({ title, name, isOpen, onClose, children, onSubmit }) {
  function handleOverlayClick(e) {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  }

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
