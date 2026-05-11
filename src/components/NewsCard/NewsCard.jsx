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
  const articleId = title;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    const alreadySaved = savedArticles.includes(articleId);

    setIsSaved(alreadySaved);
  }, [articleId]);

  function handleSaveClick() {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];

    let updatedArticles;

    if (isSaved) {
      updatedArticles = savedArticles.filter((item) => item !== articleId);
    } else {
      updatedArticles = [...savedArticles, articleId];
    }

    localStorage.setItem("savedArticles", JSON.stringify(updatedArticles));

    setIsSaved(!isSaved);
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
