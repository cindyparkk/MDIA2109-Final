import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './quizpopup.css';
import Maintenance from '../maintenance';
import QuizPopUp from '../../comps/quizpopup';

function clickStartQuiz() {
    if (true) {
    Router.push("/maintenancequizq1");
    }
}

const TrainingQuizPopUp = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="quizpopup">
    <div className="defaultscreen">
        <div className="trainingpage">
            <Maintenance />
        </div>
        <div  onClick={clickStartQuiz} className="qpopup">
            <Link href="maintenancequizq1"><QuizPopUp /></Link>
        </div>
    </div>
</div> 

export default TrainingQuizPopUp