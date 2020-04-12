import React from 'react';
import './quizpopup.css';
import CustomButton from '../custombutton'

const closeWindow = require('../../cardIcons/close_gray.png')

const QuizPopup = () => <div className="quizpopup_contain">
    <img src={closeWindow} />
     <div className="quizpopup_box">
         <h1>Quiz Time!</h1>
         <p>Time to put your <br></br>knowledge to the test!</p>
         <CustomButton text="Start Quiz" fontSize="30pt"/>
     </div>
</div>

export default QuizPopup;