import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    let meanings = props.results.meanings;

    let firstMeaning =
      meanings.find(
        (m) =>
          m.synonyms.length > 0 ||
          m.definitions.some((d) => d.synonyms.length > 0),
      ) || meanings[0];

    let remainingMeanings = meanings
      .filter((m) => m !== firstMeaning)
      .slice(0, 2);

    let selectedMeanings = [firstMeaning, ...remainingMeanings];

    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        <span className="phonetic">{props.results.phonetic}</span>
        {selectedMeanings.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} index={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
