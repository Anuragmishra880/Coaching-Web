import React from 'react'
import './Hero.css'
// import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
    return (
        <div className='Hero' id='hero'>
            <div className="Hero-txt">
                <h1>
                    We ensure better education for a better world
                </h1>
                <p>Empowering students with quality education, experienced mentors, and modern tools to build confidence, excel academically, and shape a brighter, smarter, and successful future.</p>
                {/* <button className='btn'> <a href="">Explore More</a></button> */}
            </div>
        </div>
    )
}

export default Hero
