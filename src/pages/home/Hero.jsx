import React from 'react'
import "./Hero.css"
import heroImage from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-left'>
        <h1>Career Compass</h1>

        <h2>Track your career journey .</h2>

        <p>Manage your learning, job applications and interview preparation
          in one place.</p>
        <button>Get Started</button>
        </div>

        <div className='hero-right'>
            <img src={heroImage} alt="career" />
        </div>
    </section>
  )
}

export default Hero