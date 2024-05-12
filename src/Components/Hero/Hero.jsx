import React from 'react'
import './Hero.css'
import heroimg from '../Assets/Hero.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-img">
      <img src={heroimg} alt=" " />
      </div>
    </div>
  )
}

export default Hero