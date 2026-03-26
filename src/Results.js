import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    let meanings = props.results.meanings
      .sort((a, b) => b.synonyms.length - a.synonyms.length)
      .slice(0, 3);
    let phonetic =
      props.results.phonetic ||
      props.results.phonetics.find((p) => p.text)?.text;

    return (
      <div className="Results">
        <h2 className="word">{props.results.word}</h2>
        <span className="phonetic">{phonetic}</span>
        {meanings.map(function (meaning, index) {
          return <Meaning key={index} meaning={meaning} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
