import SavedNewsHeader from "../components/SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../components/NewsCardList/NewsCardList";

export default function SavedNews() {
  const savedCards = JSON.parse(localStorage.getItem("savedArticles")) || [];

  return (
    <main>
      <SavedNewsHeader count={savedCards.length} />
      <NewsCardList cards={savedCards} isLoggedIn={true} />
    </main>
  );
}
