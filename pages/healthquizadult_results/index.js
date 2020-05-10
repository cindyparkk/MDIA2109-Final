import React, { useEffect } from 'react';
import './healthquizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import Link from 'next/link';
import Router from 'next/router';

import { data, ChangeData } from '../../data';

// import { data, ChangeData } from '../../data';

console.log(data);


const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');
const quizAnimation = require('../../animations/happy-dog.gif');


function clickMaintenance() {
    ChangeData({
        score: 0
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/maintenanceadult");
    }, 600)
}

function clickTraining() {
    ChangeData({
        score: 0
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/trainingadult");
    }, 600)
}



const HealthQuizAdultResults = ({ backgroundColor }) => {
    var text = "";
    if (data.score === 3) {
        text = "3/3"
    } else if (data.score === 2) {
        text = "2/3"
    } else if (data.score === "1") {
        text = "1/3"
    } else if (data.score === "11") {
        text = "2/3"
    } else if (data.score === "111") {
        text = "3/3"
    } else {
        text = "0/3"
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);



    return <div
        style={{ backgroundColor: backgroundColor }}
        className="health_results">
        <div className="defaultscreen">
            <LogoSmall />
            <Menu />
            <div id="page">
                <div className="health_results_pagetitle">
                    <PageTitle text="Quiz Results" />
                    <PanelTitle marginTop="5px" marginBottom="10px" text={text} />
                    <img id="animation" src={quizAnimation}></img>
                </div>
                <div className="health_results_message">
                    <PanelTitle fontSize="20px" text="Good job!" />
                    <PanelTitle fontSize="20px" marginTop="-5px" marginBottom="-5px" text="Keep up the good work! Check out" />
                    <PanelTitle fontSize="20px" marginBottom="0px" text="the other categories to learn more" />
                    <PanelTitle fontSize="20px" text="what it takes to look after a dog!" />
                </div>
                <div className="health_results_categories">
                    <div onClick={clickMaintenance} className="training-results_maintenance">
                        <CardPanel src={maintenanceImg} />
                        <PanelTitle color="#B7CfD2" text="Maintenance" />
                    </div>
                    <div onClick={clickTraining} className="health-results_training">
                        <CardPanel color="#B7D4A0" src={trainingImg} />
                        <PanelTitle color="#B7D4A0" text="Training" />
                    </div>
                </div>
            </div>
        </div >
    </div>
}

export default HealthQuizAdultResults;