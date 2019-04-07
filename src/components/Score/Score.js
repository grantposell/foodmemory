import React from "react";
import "./Score.css";

const Score = props => <h1 className="score"> Score: {props.score} | Top Score: {props.topScore}</h1>;

export default Score;