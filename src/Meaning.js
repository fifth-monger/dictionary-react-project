import React from "react";

export default function Meaning(props) {
  let definition =
    props.meaning.definitions
      .filter((def) => def.example)
      .sort((a, b) => b.definition.length - a.definition.length)[0] ||
    props.meaning.definitions[0];

  return (
    <div className="Meaning">
      <p className="pos">{props.meaning.partOfSpeech}</p>
      <p className="definition">{definition.definition}</p>
      <p className="example">{definition.example}</p>
    </div>
  );
}
