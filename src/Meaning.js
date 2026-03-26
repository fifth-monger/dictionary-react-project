import React from "react";

export default function Meaning(props) {
  let definitions = [...props.meaning.definitions]
    .sort((a, b) => b.synonyms.length - a.synonyms.length)
    .slice(0, 6);

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
