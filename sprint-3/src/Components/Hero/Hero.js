import React, { Component } from 'react';
import './Hero.scss'

class Hero extends Component {
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        return (
            <section className="hero">
                <div className="hero__holder">
                    <video className="hero__holder--image" poster={!!this.props.video ? this.props.video.image : ''}
                        src="#" controls />
                </div>
            </section>
        )
    }
}

export default Hero;