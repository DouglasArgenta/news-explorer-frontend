function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="popup__title">Cadastro realizado com sucesso!</h2>

        <button className="popup__submit" onClick={onClose}>
          Fazer login
        </button>
      </div>
    </div>
  );
}

export default InfoTooltip;
