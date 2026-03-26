import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  let definition = props.meaning.definitions.find(def => 
  def.synonyms.length > 0
) || props.meaning.definitions[0];

return (
  <div className="Meaning">
    <p className="pos">{props.meaning.partOfSpeech}</p>
    <p className="definition">{definition.definition}</p>
    {definition.example && <p className="example">{definition.example}</p>}
    <Synonyms synonyms={definition.synonyms} />
  </div>
);
