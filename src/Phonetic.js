import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="phonetic-text">{props.phonetic.text}</span>
      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          ▶
        </a>
      )}
    </div>
  );
}
