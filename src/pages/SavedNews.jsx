import { useEffect, useState } from "react";

import SavedNewsHeader from "../components/SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../components/NewsCardList/NewsCardList";

export default function SavedNews() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("savedArticles")) || [];

    setSavedCards(articles);
  }, []);

  useEffect(() => {
    function handleStorageChange() {
      const articles = JSON.parse(localStorage.getItem("savedArticles")) || [];

      setSavedCards(articles);
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <main>
      <SavedNewsHeader count={savedCards.length} />

      <NewsCardList cards={savedCards} isLoggedIn={true} />
    </main>
  );
}
