import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginPopup({ isOpen, onClose, onSwitch, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && password;

  function handleSubmit(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <PopupWithForm
      title="Entrar"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <span className="popup__label">E-mail</span>

        <input
          type="email"
          placeholder="Insira seu e-mail"
          className="popup__input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="popup__field">
        <span className="popup__label">Senha</span>

        <input
          type="password"
          placeholder="Insira a senha"
          className="popup__input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className={`popup__submit ${
          !isFormValid ? "popup__submit_disabled" : ""
        }`}
        disabled={!isFormValid}
      >
        Entrar
      </button>

      <p className="popup__switch">
        ou{" "}
        <span className="popup__link" onClick={onSwitch}>
          Inscreva-se
        </span>
      </p>
    </PopupWithForm>
  );
}

export default LoginPopup;
