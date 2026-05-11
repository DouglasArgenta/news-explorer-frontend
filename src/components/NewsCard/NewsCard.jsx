import { useEffect, useState } from "react";
import "./NewsCard.css";

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function NewsCard({
  title,
  description,
  publishedAt,
  source,
  urlToImage,
  isLoggedIn,
}) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    const articleAlreadySaved = savedArticles.some(
      (article) => article.title === title,
    );

    setIsSaved(articleAlreadySaved);
  }, [title]);

  function handleSaveClick() {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    if (isSaved) {
      const updatedArticles = savedArticles.filter(
        (article) => article.title !== title,
      );

      localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));

      setIsSaved(false);
    } else {
      const articleData = {
        title,
        description,
        publishedAt,
        source,
        urlToImage,
      };

      localStorage.setItem(
        "savedArticles",
        JSON.stringify([...savedArticles, articleData]),
      );

      setIsSaved(true);
    }
  }

  return (
    <article className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src={
            urlToImage || "https://via.placeholder.com/400x272?text=Sem+Imagem"
          }
          alt={title || "news"}
        />

        {!isLoggedIn && (
          <div className="card__tooltip">Faça login para salvar artigos</div>
        )}

        <button
          type="button"
          className={`card__save-button ${
            isSaved ? "card__save-button_active" : ""
          }`}
          onClick={handleSaveClick}
        ></button>
      </div>

      <div className="card__content">
        <p className="card__date">
          {publishedAt ? formatDate(publishedAt) : "Data indisponível"}
        </p>

        <h3 className="card__title">{title || "Sem título"}</h3>

        <p className="card__text">
          {description || "Sem descrição disponível"}
        </p>

        <p className="card__source">{source?.name || "Fonte desconhecida"}</p>
      </div>
    </article>
  );
}

export default NewsCard;
