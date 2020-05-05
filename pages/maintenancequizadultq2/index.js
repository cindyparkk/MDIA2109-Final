import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenancequizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    if (true) {
        Router.push("/maintenancequizadultq3");
    }
}

function clickBack() {
    if (true) {
        Router.push("/maintenancequizadultq1");
    }
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    if (true) {
        Router.push("/maintenancequizadultq3");
    }
}


const MaintenanceQuizAdultQ2 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_quiz">
         <div className="menu_main">
            <Menu />
        </div>
    <div className="defaultscreen">
        <LogoSmall />
        <div className="maintenancequiz_pagetitle">
            <PageTitle fontSize="40px" text="Maintenance Quiz" />
        </div>
        <div className="maintenance_question2">
            <PanelTitle text="Will your dog" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="eat the same kind" />
            <PanelTitle marginBottom="-5px" text="of food throughout" />
            <PanelTitle text="their life?" />
        </div>
        <div className="maintenance_answers2">
            <div onClick={clickAnswer} className="maintenance2_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Yes!" />
            </div>
            <div onClick={clickRight} className="maintenance2_answer">
                <CustomButton fontSize="30px" color="#Ef9B89" text="No." />
            </div>
            <div onClick={clickAnswer} className="maintenance2_answer">
                <CustomButton fontSize="30px" color="#B7D4A0" text="That's a thing?" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >

export default MaintenanceQuizAdultQ2;