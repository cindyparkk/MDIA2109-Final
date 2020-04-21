import React from 'react';
import './medical_adult.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

const MedicalAdult = () => {
    return <div id="mainappinfoscreen">
        <div className="defaultscreen">
            <div className="transparencyScreen">
                <div className="medical_page">
                    <Health />
                </div>
                <div className="medical_infopanel_adult">
                    <InfoPanel title="Medical Care" color="#EF9B89" info="Booster shots for DHLPPC and rabies have to be administered after 12 months because the substances of the vaccination do not stay in your dog's body for a lifetime. This is to increase immunity against the antigen of rabies / other diseases.

After the first booster shot, the dog needs to be vaccinated for Rabies every 3 years."/>
                </div>
            </div>
        </div>
    </div>
};

export default MedicalAdult;