import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

export default function NewsCardList({ cards, isLoggedIn }) {
  const [visibleCount, setVisibleCount] = useState(3);

  function handleShowMore() {
    setVisibleCount((prev) => prev + 3);
  }

  return (
    <section className="cards">
      <div className="cards__container">
        <h2 className="cards__title">Resultados da busca</h2>

        <div className="cards__list">
          {cards.slice(0, visibleCount).map((item, index) => (
            <NewsCard key={index} {...item} isLoggedIn={isLoggedIn} />
          ))}
        </div>

        {visibleCount < cards.length && (
          <button className="cards__more" onClick={handleShowMore}>
            Mostrar mais
          </button>
        )}
      </div>
    </section>
  );
}
