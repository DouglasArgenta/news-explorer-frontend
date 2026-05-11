import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegisterPopup({ isOpen, onClose, onOpenLogin, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const isFormValid = email && password && username;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;
    onSuccess();
  }

  return (
    <PopupWithForm
      title="Inscrever-se"
      name="register"
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

      <label className="popup__field">
        <span className="popup__label">Nome de usuário</span>
        <input
          type="text"
          placeholder="Insira seu nome de usuário"
          className="popup__input"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <button
        type="submit"
        className={`popup__submit ${
          !isFormValid ? "popup__submit_disabled" : ""
        }`}
        disabled={!isFormValid}
      >
        Inscrever-se
      </button>

      <p className="popup__switch">
        ou{" "}
        <span className="popup__link" onClick={onOpenLogin}>
          Entrar
        </span>
      </p>
    </PopupWithForm>
  );
}

export default RegisterPopup;
