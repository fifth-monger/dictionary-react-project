import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    let meanings = props.results.meanings
      .sort((a, b) => b.synonyms.length - a.synonyms.length)
      .slice(0, 3);

    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        <span className="phonetic">{props.results.phonetic}</span>
        {meanings.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
