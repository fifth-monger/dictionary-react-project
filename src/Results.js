import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    let meanings = props.results.meanings;

    let nounMeaning = meanings.find((m) => m.partOfSpeech === "noun");
    let otherMeanings = meanings
      .filter((m) => m.partOfSpeech !== "noun")
      .slice(0, nounMeaning ? 2 : 3);
    let selectedMeanings = nounMeaning
      ? [nounMeaning, ...otherMeanings]
      : otherMeanings;

    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        <span className="phonetic">{props.results.phonetic}</span>
        {selectedMeanings.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
