import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    let meaning =
      props.results.meanings.find(
        (m) =>
          m.synonyms.length > 0 ||
          m.definitions.some((d) => d.synonyms.length > 0),
      ) || props.results.meanings[0];

    let allSynonyms = [
      ...new Set([
        ...meaning.synonyms,
        ...meaning.definitions.flatMap((d) => d.synonyms),
      ]),
    ];

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
          <Meaning meaning={meaning} />
        </div>
        <div className="Results-right">
          <div className="result-images">
            {props.photos && props.photos[0] && (
              <img src={props.photos[0].src.landscape} alt={props.photos[0].alt} className="img-fluid result-image" />
            )}
            {props.photos && props.photos[1] && (
              <img src={props.photos[1].src.landscape} alt={props.photos[1].alt} className="img-fluid result-image" />
            )}
            {props.photos && props.photos[2] && (
              <img src={props.photos[2].src.landscape} alt={props.photos[2].alt} className="img-fluid result-image" />
            )}
          </div>
          <Synonyms synonyms={allSynonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
