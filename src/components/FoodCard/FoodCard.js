import React from "react";
import "./FoodCard.css";

const FoodCard = props => (
  <div>
    <span onClick={() => props.clickedFood(props.id)} className="clicked">
      <div className="card">
        <div className="img-container">

          <img alt={props.name} src={props.image} />

        </div>
      </div>
    </span>
  </div>
);

export default FoodCard;