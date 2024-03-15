import React from "react";
import PropTypes from "prop-types";
import {useState} from 'react';

const FlashCard = (props) => {
    const [cardState,flipCard] = useState("front");
    const [score,setScore] = useState(0);
    const scoreCorrect = () => {
      setScore(score + 1);
      flipCard("front");
    }
    const scoreIncorrect = () => {flipCard("front");}

    const updateCard = () => {
        if (cardState == "front") {
            flipCard("back")
        }
        else {
            flipCard("front")
        } 
    };
    return (
        <div>
            <div>Score: {score}</div><br/>
            <div className="FlashCard" onClick={updateCard}>
                {cardState == "front"? <p>{props.front}</p>:<p>{props.back}</p>}
                <br/>
            </div>
            <br/>
            <div className="layout">
                <button onClick={scoreCorrect}>I got the question right! 😁</button>
                <button onClick={scoreIncorrect}>I got the question wrong. 😡</button>  
            </div>
        </div>
    )
}
FlashCard.propTypes =  {
    front: PropTypes.string,
    back: PropTypes.string
}
export default FlashCard;