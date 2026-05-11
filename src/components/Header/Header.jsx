import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ onLoginClick, isLoggedIn }) {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        NewsExplorer
      </NavLink>

      <button className="header__menu-button">☰</button>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link_active" : ""}`
          }
        >
          Início
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink
              to="/saved-news"
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link_active" : ""}`
              }
            >
              Artigos salvos
            </NavLink>

            <button className="header__user-button">Douglas ⎋</button>
          </>
        )}

        {!isLoggedIn && (
          <button className="header__button" onClick={onLoginClick}>
            Entrar
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
