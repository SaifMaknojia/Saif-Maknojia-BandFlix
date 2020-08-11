import React from "react";
import "./Main.scss";

import Views from "../../assets/Images/eye.svg";
import Heart from "../../assets/Images/heart.svg";


function Main() {
    return (
        <main className="main-content">
            <section className="information-section">
                <div className="info-container">
                    <div className="information">
                        <div className="main-heading">
                            <h2 className="main-heading__heading">BMX Rampage: 2018 Highlights</h2>
                        </div>
                        <div className="input-section">
                            <div className="input-section__title">
                                <h5 className="input-section__title--by">By Red Cow</h5>
                                <p className="input-section__title--date">12/18/2018</p>
                            </div>
                            <div className="input-section__feedback">
                                <p className="input-section__feedback--views"><span><img className="icons" src={Views} alt="views"></img></span>&nbsp;&nbsp;1,001,023</p>
                                <p className="input-section__feedback--loves"><span><img className="icons" src={Heart} alt="heart"></img></span>&nbsp;&nbsp;110,985</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero__para">
                        <p className="hero__para--input">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Main;