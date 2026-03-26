import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchword, setSearchword] = useState("");
  let [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "tZuZvfO5JozSEC78MQ1uS6cW1a1EL6cTlz4DbeGAjaweJG8IjeWV7n6Z";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchword}&per_page=3`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <p className="tagline">definitions. phonetics. imagery.</p>
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
