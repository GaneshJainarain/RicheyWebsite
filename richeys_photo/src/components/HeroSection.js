import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Page.mp4" autoPlay loop muted />
            <h1>RICHEY JAY</h1>
            <p>Welcome to the world in the eyes of Richey Jay</p>
            <div className="hero-btns">
                <Button
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                PLACEHOLDER   
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                PLACEHOLDER 2 <i className='far fa-play-circle'/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
