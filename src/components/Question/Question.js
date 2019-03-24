import React from 'react';
import './Question.css';

const question = (props) => {
    return (
        <div className="Question">
            <p> Question:  {props.question} </p>
            <input type="text" onChange={props.changed} value={props.answer}  />
            <p> You are feeling: {props.answer}  </p>
        </div>
    );
}

export default question;