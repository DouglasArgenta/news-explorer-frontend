import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserir tema"
          className="search__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" className="search__button">
          Procurar
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
