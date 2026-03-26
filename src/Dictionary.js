import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchword, setSearchword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchwordChange(event) {
    setSearchword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>
        What word
        <br />
        are you after?
      </h1>
      <p>definitions. etymology. imagery.</p>
      <form onSubmit={search}>
        <div className="search-wrapper">
          <span className="search-icon">⌕</span>
          <input
            type="search"
            onChange={handleSearchwordChange}
            autoFocus={true}
            placeholder="search a word..."
          />
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
