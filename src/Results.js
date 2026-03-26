import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";

export default function Results(props) {
  if (props.results) {
    let meanings = props.results.meanings
      .sort((a, b) => b.synonyms.length - a.synonyms.length)
      .slice(0, 3);

    let phonetic =
      props.results.phonetic ||
      props.results.phonetics.find((p) => p.text)?.text;

    let allSynonyms = [
      ...new Set(
        meanings.flatMap(
          (m) =>
            m.definitions.find((d) => d.synonyms.length > 0)?.synonyms ||
            m.synonyms,
        ),
      ),
    ].slice(0, 6);

    return (
      <div className="Results">
        <div className="Results-left">
          <h2 className="word">{props.results.word}</h2>
          <span className="phonetic">{phonetic}</span>
          {meanings.map(function (meaning, index) {
            return <Meaning key={index} meaning={meaning} />;
          })}
        </div>
        <div className="Results-right">
          <div className="image-placeholder">image</div>
          <Synonyms synonyms={allSynonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
