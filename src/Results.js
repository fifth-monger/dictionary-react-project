import React from "react";
import Meaning from "./Meaning.js";
import Synonyms from "./Synonyms.js";
import Phonetic from "./Phonetic.js";
import Photos from "./Photos.js";

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
          <Photos photos={props.photos} />
          <Synonyms synonyms={allSynonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
