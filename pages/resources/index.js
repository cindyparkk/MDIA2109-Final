import React from 'react';
import './resources.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';

const Resources = () => {
    return <div className="defaultscreen">
        <div className="screen_icons">
            <LogoSmall />
            <PageTitle text="Resources" color="#000" />
            <Menu />
        </div>
        <div className="resources_box" id="first_box">
            <PanelTitle text="Where to adopt" color="#EF9B89"/>
            <div className="resources_content">
                <p>BC SPCA</p>
                <a href="https://spca.bc.ca/">BC SPCA</a>
            </div>
            <div className="resources_content">
                <p>Home at Last</p>
                <a href="https://www.homeatlastdogrescuebc.ca/">Home at last</a>
            </div>
            <div className="resources_content">
                <p>Kijiji</p>
                <a href="https://www.kijiji.ca/b-dogs-puppies/vancouver/c126l1700287">Kijiji-Vancouver</a>
            </div>
        </div>
        <div className="resources_box">
            <PanelTitle text="Rescue Organizations" color="#B0D0D3"/>
            <div className="resources_content">
                <p>Squamish Neighbourhood Animal Partnership and Protection (S.N.A.P.P) Society</p>
                <a href="https://snappsociety.com/">S.N.A.P.P Society</a>
            </div>
            <div className="resources_content">
                <p>Dogwood Rescue</p>
                <a href="http://www.dogwoodrescue.org/">Dogwood Rescue Society</a>
            </div>
        </div>
        <div className="resources_box">
            <PanelTitle text="For more information" />
            <div className="resources_content">
                <p>Maintenance</p>
                <a href="https://www.akc.org/expert-advice/health/how-much-exercise-does-dog-need/">How much exercise does a dog need every day?</a>
                <br></br>
                <br></br>
                <a href="https://www.moneyunder30.com/the-true-cost-of-pet-ownership/">The annual cost of pet ownership: Can you afford a flurry friend?</a>
            </div>
            <div className="resources_content">
                <p>Health</p>
                <a href="https://www.petsmart.ca/learning-center/dog-care/puppy-vaccinations-when-to-get-them-and-why/A0067.html">Puppy Vaccinations: When to get them and Why</a>
            </div>
            <div className="resources_content">
                <p>Training</p>
                <a href="https://www.wellnesspetfood.com/our-community/wellness-blog/benefits-crate-training-your-dog">Benefits of Crate Training your Dog</a>
            </div>
        </div>
        <div className="resources_box">
            <PanelTitle text="Dog videos for everyone" color="#EF9B89"/>
            <div className="resources_content">
                <p>Peaceful grooming</p>
                <video width="320" height="240" controls>
                    <source src="https://www.youtube.com/watch?v=tkzwXX53qQ8" type="video/mp4"></source>
                </video>
            </div>
        </div>
    </div>
};

export default Resources;