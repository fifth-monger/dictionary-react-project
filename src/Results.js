import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    let meanings = props.results.meanings
      .sort((a, b) => b.synonyms.length - a.synonyms.length)
      .slice(0, 3);

    let allSynonyms = [
      ...new Set(
        meanings.flatMap(
          (m) =>
            m.definitions.find((d) => d.synonyms.length > 0)?.synonyms ||
            m.synonyms,
        ),
      ),
    ].slice(0, 6);
    let phonetic =
      props.results.phonetics.find((p) => p.text && p.audio) ||
      props.results.phonetics.find((p) => p.text) ||
      props.results.phonetics.find((p) => p.audio) ||
      props.results.phonetics[0];

    return (
      <div className="Results">
        <div className="Results-left">
          <h2 className="word">{props.results.word}</h2>
          {phonetic && <Phonetic phonetic={phonetic} />}
          {meanings.map(function (meaning, index) {
            return (
              <Meaning key={index} meaning={meaning} total={meanings.length} />
            );
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
