import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <p className="synonyms-list">
          <div className="synonyms-label">related words:</div>
          {props.synonyms.join(", ")}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
