import React from 'react';
import './trainingquizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';


const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');


const TrainingQuizResults = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_results">
    <div className="defaultscreen">
        <LogoSmall />
        <div className="trainingresults_pagetitle">
            <PageTitle text="Quiz Results" />
            <PageTitle text="2/3" />
        </div>
        <div className="training_results_results">
            <PanelTitle fontSize="20px" text="Good job!" />
            <PanelTitle fontSize="20px" marginTop="-5px" marginBottom="-5px" text="Keep up the good work! Check out" />
            <PanelTitle fontSize="20px" marginBottom="0px" text="the other categories to learn more" />
            <PanelTitle fontSize="20px" text="what it takes to look after a dog!" />
        </div>
        <div className="training_results_categories">
            <div className="training-results_maintenance">
                <CardPanel src={maintenanceImg} />
                <PanelTitle color="#B7CfD2" text="Maintenance" />
            </div>
            <div className="training-results_health">
                <CardPanel color="#B7D4A0" src={healthImg} />
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
</div >

export default TrainingQuizResults;