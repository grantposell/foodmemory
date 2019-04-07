import React, { Component } from "react";
import Title from "../Title";
import PlayMessage from "../PlayMessage";
import ScoreBoard from "../Score";
import "./Navbar.css";

//const Navbar = props => <h1 className="navbar">{props.children}</h1>;

class Navbar extends Component {

    state = {
        score: 0,
        topscore:0,
        playing: false
    };

    updateScore = score => {

    };

    // 
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>               
                        <a className="brand" href=" https://modest-leavitt-ad3dd2.netlify.com/"><Title>Food Memory Game</Title></a>
                    </li>    
                    <li>
                        <PlayMessage 
                            message={this.props.message}>
                        </PlayMessage>
                    </li>
                    <li>
                        <ScoreBoard 
                        score={this.props.score} 
                        topScore={this.props.topScore}> 
                        </ScoreBoard>
                    </li>
                </ul>
            </nav>
        );
    };

}

export default Navbar;