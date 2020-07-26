import React from "react";
import "../../styles/Card.css";

function Card(props) {
  const {
    post: { image, imagetitle, description }
  } = props;

  return (
    <>
      <img
        className="card-img-top"
        height={300}
        src={image}
        alt="Card img cap"
      />
      <div className="card-body">
        <h4 className="card-title">{imagetitle}</h4>
        <p className="card-text">{description}</p>
        {}
      </div>
    </>
  );
}

export default Card;
