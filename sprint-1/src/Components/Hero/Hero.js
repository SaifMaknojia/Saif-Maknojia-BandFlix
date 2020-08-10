import React from 'react';
import Image1 from "../../assets/Images/video-list-0.jpg";
import './Hero.scss'

function Hero(props) {
    return (
        <section className="hero">
            <div className="hero__holder">
                <video className="hero__holder--image" poster={Image1}
                    src="#" controls />
            </div>
        </section>
    )
}

export default Hero;