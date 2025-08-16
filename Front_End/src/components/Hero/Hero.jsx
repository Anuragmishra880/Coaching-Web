import React from 'react'
import { Link as LinkScroll } from 'react-scroll';

import './Hero.css'
import Teacher from '../../assets/teacher.jpg'
const Hero = () => {
    return (
        <>
            <div className='Hero' id='hero'>
                <div className="Hero-txt">
                    <h1>
                        {/* We ensure better education for a better world */}
                        Find the <span className='break'>Perfect Teacher </span>
                    </h1>
                    <p>Empowering students with quality  education, experienced mentors, and modern tools to build confidence, excel academically, and shape a brighter, smarter, and successful future.</p>
                    <LinkScroll
                        className='button'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={300}
                    >
                        Connect with us
                    </LinkScroll >
                </div>
                <div className="Teacher">
                    <img src={Teacher} alt="" />
                </div>
            </div >
        </>
    )
}

export default Hero
