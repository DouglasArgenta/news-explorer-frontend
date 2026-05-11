import SavedNewsHeader from "../components/SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../components/NewsCardList/NewsCardList";

const savedCards = [
  {
    title: "Yellowstone: parque renova trilha histórica",
    text: "O Serviço Nacional de Parques anunciou a renovação de trilhas em Yellowstone...",
    date: "2 de agosto, 2023",
    source: "National Geographic",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "A natureza melhora o bem-estar",
    text: "Estudos mostram que contato com a natureza reduz o estresse...",
    date: "5 de agosto, 2023",
    source: "BBC",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    title: "Tecnologia e sustentabilidade",
    text: "Novas tecnologias ajudam a preservar o meio ambiente...",
    date: "10 de agosto, 2023",
    source: "TechCrunch",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  },
];

export default function SavedNews() {
  return (
    <main>
      <SavedNewsHeader count={savedCards.length} />
      <NewsCardList cards={savedCards} />
    </main>
  );
}
