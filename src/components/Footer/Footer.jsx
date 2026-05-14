import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © 2026, desenvolvido por Douglas Argenta
        </p>

        <div className="footer__right">
          <div className="footer__links">
            <a href="/" className="footer__link">
              Início
            </a>

            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </div>

          <div className="footer__socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img
                className="footer__icon"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github"
              />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img
                className="footer__icon"
                src="https://cdn-icons-png.flaticon.com/512/20/20673.png"
                alt="facebook"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
