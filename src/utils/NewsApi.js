const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = "https://nomoreparties.co/news/v2/everything";

function getLastWeekDate() {
  const date = new Date();

  date.setDate(date.getDate() - 7);

  return date.toISOString().split("T")[0];
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

export async function getNews(query) {
  const from = getLastWeekDate();
  const to = getTodayDate();

  const url = `${BASE_URL}?q=${query}&from=${from}&to=${to}&pageSize=100&apiKey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro API: ${response.status}`);
  }

  const data = await response.json();

  return data.articles;
}
