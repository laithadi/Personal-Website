import React from 'react';
import ParticlesBg from "particles-bg";

import "../MainPage/MainPage.css";
import {NavLink} from 'react-router-dom';

const MainPage = () => {
    return (
        <React.Fragment>
            <ParticlesBg type="cobweb" bg={true}/>
            <div className="main__div">
                <h1 className="title">
                    Laith Adi
                </h1>
                <h3 className="quote">"Failure is an option here. If things are not failing you are not innovating." - Elon Musk</h3>
                <NavLink className="btn__" to="/AboutLaith" exact>About Me</NavLink>
                <NavLink className="btn__" to="/Resume" exact>My Resume</NavLink>
                <NavLink className="btn__" to="/temp" exact>Temp</NavLink>
            </div>
        </React.Fragment>
    );
};

export default MainPage;
