import React from "react";
import heroImg from "../images/drawers.jpg";
import Detail from "./Detail";
const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={heroImg} alt="article" />
      </div>
      {/* content */}
      <div className="card__content">
        <h3 className="card__title">
          {" "}
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h3>

        <p className="card__para">
          {" "}
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <Detail />
      </div>
      {/* card footer */}
    </div>
  );
};

export default Card;
