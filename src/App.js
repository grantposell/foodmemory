import React, { Component } from "react";
import FoodCard from "./components/FoodCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import foods from "./foods.json";
import "./App.css";


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.foods to the foods json array
  state = {
    foods,
    displayOrder: shuffleArray(foods),
    score: 0,
    topScore: 0,
    message: "Choose a pic but not the same one twice!"
  };

  clickedFood = id => {
    // shuffle the displayOrder
    const displayOrder = shuffleArray(this.state.displayOrder);

    // Find foods with an id equal to the id clicked
    const food = this.state.foods.find(food => (food.id === id));

    let currentFoods = this.state.foods;

    
    let score = this.state.score;
    let topScore = this.state.topScore;
    let message = '';


    if (!food.guessed) {

      message = "Excellent! You guessed right!";
      score++;
      if (topScore < score)
        topScore = score;
      currentFoods.find(food => (food.id === id)).guessed = true;
    }
    else {
      message = "You guessed wrong! Click any pic to start a new round.";

      currentFoods.forEach(food => (food.guessed = false));
      score = 0;
    }


    // Set this.state.foods equal to the new foods array
    this.setState({ currentFoods, displayOrder, score, topScore, message });
  };

  // Map over this.state.foods and render a FoodCard component for each food object
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.displayOrder.map(food => (
            <FoodCard
              clickedFood={this.clickedFood}
              id={food.id}
              key={food.id}
              image={food.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;