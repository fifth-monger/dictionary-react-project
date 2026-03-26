import React from "react";

export default function Phonetic(props) {
  function playAudio() {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetic">
      <span className="phonetic-text">{props.phonetic.text}</span>
      {props.phonetic.audio && (
        <button onClick={playAudio} className="play-button">
          ▶
        </button>
      )}
    </div>
  );
}
