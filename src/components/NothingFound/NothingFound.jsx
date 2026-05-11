import "./NothingFound.css";
import notFoundIcon from "../../images/icons/not-found.svg";

function NothingFound() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <img src={notFoundIcon} alt="Nada encontrado" />
        <h2>Nada encontrado</h2>
        <p>Desculpe, mas nada corresponde aos seus termos de pesquisa.</p>
      </div>
    </section>
  );
}

export default NothingFound;
