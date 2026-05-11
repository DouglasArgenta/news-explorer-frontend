import "./SavedNewsHeader.css";

export default function SavedNewsHeader({ count }) {
  return (
    <section className="saved-header">
      <p className="saved-header__subtitle">Artigos salvos</p>

      <h2 className="saved-header__title">
        Douglas, você tem {count} artigos salvos
      </h2>

      <p className="saved-header__keywords">
        Por palavras-chave: <span>Natureza, Tecnologia, e 2 outras</span>
      </p>
    </section>
  );
}
