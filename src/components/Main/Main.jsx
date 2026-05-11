import { useEffect, useState } from "react";
import "./Main.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

import { getNews } from "../../utils/NewsApi";

export default function Main({ isLoggedIn }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState("");

  // 🔥 restaura dados salvos ao abrir site
  useEffect(() => {
    const savedCards = localStorage.getItem("newsCards");
    const savedSearch = localStorage.getItem("searchKeyword");

    if (savedCards && savedSearch) {
      setCards(JSON.parse(savedCards));
      setHasSearched(true);
    }
  }, []);

  async function handleSearch(query) {
    if (!query.trim()) {
      setError("Por favor, insira uma palavra-chave");
      return;
    }

    setError("");
    setHasSearched(true);
    setIsLoading(true);

    try {
      const articles = await getNews(query);

      setCards(articles);

      // 🔥 salva no localStorage
      localStorage.setItem("newsCards", JSON.stringify(articles));
      localStorage.setItem("searchKeyword", query);
    } catch (err) {
      console.error(err);

      setError(
        "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__container">
          <h1 className="main__title">O que está acontecendo no mundo?</h1>

          <p className="main__subtitle">
            Encontre as últimas notícias sobre qualquer tema e salve elas em sua
            conta pessoal
          </p>

          <SearchForm onSearch={handleSearch} />

          {error && <p className="main__error">{error}</p>}
        </div>
      </section>

      {isLoading && <Preloader />}

      {!isLoading && hasSearched && cards.length === 0 && !error && (
        <NothingFound />
      )}

      {!isLoading && cards.length > 0 && (
        <NewsCardList cards={cards} isLoggedIn={isLoggedIn} />
      )}

      <About />
    </main>
  );
}
