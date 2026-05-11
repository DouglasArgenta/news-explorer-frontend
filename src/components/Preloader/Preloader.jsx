import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__container">
        <div className="preloader__spinner"></div>
        <p className="preloader__text">Procurando notícias...</p>
      </div>
    </section>
  );
}

export default Preloader;
