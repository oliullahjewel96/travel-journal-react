import React from "react";
import "../index.css";
export default function Travelled(props) {
  return (
    <div>
      <section className="main">
        <img src={props.place.imageUrl} alt="" className="place--image" />
        <div className="place--info">
          <span>{props.place.location}</span>
          <a href={props.place.googleMapsUrl}>View on Google Maps</a>
          <h1 className="place--name">{props.place.title}</h1>
          <strong>
            {props.place.startDate} - {props.place.endDate}
          </strong>
          <p className="place--description">{props.place.description}</p>
        </div>
      </section>
    </div>
  );
}
