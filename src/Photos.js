import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.slice(0, 3).map(function (photo, index) {
          return (
            <a
              href={photo.src.original}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <img
                src={photo.src.landscape}
                alt={photo.alt}
                className="img-fluid result-image"
              />
            </a>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
