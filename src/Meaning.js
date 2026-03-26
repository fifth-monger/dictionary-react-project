import React from "react";

export default function Meaning(props) {
  let definitions =
    props.total === 1
      ? props.meaning.definitions.slice(0, 3)
      : [
          props.meaning.definitions.find((def) => def.synonyms.length > 0) ||
            props.meaning.definitions[0],
        ];

  return (
    <div className="Meaning">
      <p className="pos">{props.meaning.partOfSpeech}</p>
      {definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">{definition.definition}</p>
            {definition.example && (
              <p className="example">{definition.example}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
