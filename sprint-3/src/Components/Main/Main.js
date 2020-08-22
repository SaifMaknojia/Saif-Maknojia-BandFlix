import React, { Component } from "react";
import "./Main.scss";

import Views from "../../assets/Images/eye.svg";
import Heart from "../../assets/Images/heart.svg";


class Main extends Component {

  render() {
    
    const data = this.props.video;
    var timeStamp = new Date(data.timestamp).toLocaleDateString();
    
    return (
      <main className="main-content">
        <section className="information-section">
          <div className="info-container">
            <div className="information">
              <div className="main-heading">
                <h2 className="main-heading__heading">{data.title}</h2>
              </div>
              <div className="input-section">
                <div className="input-section__title">
                  <h5 className="input-section__title--by">{data.channel}</h5>
                  <p className="input-section__title--date">{timeStamp}</p>
                </div>
                <div className="input-section__feedback">
                  <p className="input-section__feedback--views"><span><img className="icons" src={Views} alt="views"></img></span>&nbsp;&nbsp;{data.views}</p>
                  <p className="input-section__feedback--loves"><span><img className="icons" src={Heart} alt="heart"></img></span>&nbsp;&nbsp;{data.likes}</p>
                </div>
              </div>
            </div>
            <div className="hero__para">
              <p className="hero__para--input">{data.description}</p>
            </div>
          </div>
        </section>
      </main>

    )
  }
}

export default Main;