import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './trainingquizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';


import {data, ChangeData} from '../../data';

console.log(data);

function clickAnswer() {
    if (true) {
        Router.push("/trainingquizadultq3");
    }
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    if (true) {
        Router.push("/trainingquizadultq3");
    }
}


function clickBack() {
    if (true) {
        Router.push("/trainingquizadultq1");
    }
}

const TrainingQuizAdultQ2 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <Menu />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question1">
            <PanelTitle text="Are adult dogs" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="often easier to" />
            <PanelTitle  marginTop="-5px" text="train than puppies?" />
        </div>
        <div className="training_answers1">
            <div onClick={clickRight} className="training2_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Yes" />
            </div>
            <div onClick={clickAnswer} className="training2_answer">
                <CustomButton fontSize="30px" color="#Ef9B89" text="No" />
            </div>
            <div onClick={clickAnswer} className="training2_answer">
              <CustomButton fontSize="30px" color="#B7D4A0" text="puppies are cuter" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >

export default TrainingQuizAdultQ2;