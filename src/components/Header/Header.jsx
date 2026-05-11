import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ onLoginClick, isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <NavLink to="/" className="header__logo" onClick={closeMenu}>
        NewsExplorer
      </NavLink>

      <button className="header__menu-button" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <nav className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`}>
        <NavLink
          to="/"
          onClick={closeMenu}
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
              onClick={closeMenu}
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
          <button
            className="header__button"
            onClick={() => {
              onLoginClick();
              closeMenu();
            }}
          >
            Entrar
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
