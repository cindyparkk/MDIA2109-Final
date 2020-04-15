import React from 'react';
import './tutorial3.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import InfoPanel from '../../comps/infopanel';
import PanelTitle from '../../comps/paneltitle';

const Tutorial03 = () => {
    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PanelTitle text="Tutorial" color="#000" fontSize="35pt"/>
                <Menu />
            </div>
            <div className="tut_box">
                <InfoPanel title="Information" info="You will be quizzed after you have opened all panels (i.e. Commands). So make sure to read the content carefully!"/>
                <p>If you read the above, you should<br></br>know what to expect next...</p>
            </div>
            <div className="progress_box">
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_active"></div>
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
            </div>
        </div>
    </div>
};

export default Tutorial03;