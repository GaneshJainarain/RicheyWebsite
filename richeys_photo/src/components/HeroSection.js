import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>RICHEY JAY</h1>
            <p> The World through the eyes of Richey Jay</p>
            <div className="hero-btns">
                <Button
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                ABOUT ME <i className='fas fa-user'/>
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                PHOTOS <i className='fas fa-images'/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
