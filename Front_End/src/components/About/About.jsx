import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'
// import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <>

            <div className='about' id='about' >


                <div className="about-left">
                    <img src={about_img} className="about-img" />
                    {/* <img src={play_icon} className="play-icon" /> */}
                </div>
                <div className="about-right">
                    <h3>About Coaching</h3>
                    <h2> Empowering Minds Today to Lead the World Tomorrow </h2>
                    <p>At BST, we believe that today’s learners are tomorrow’s innovators. Our mission goes beyond teaching technology — we aim to shape confident, skilled, and forward-thinking individuals ready to lead in the digital era.</p>
                    <p>We strive to unlock every learner’s true potential through guided mentorship, hands-on practice, and industry-relevant projects. Our focus is on delivering education that blends technical mastery with problem-solving skills, creativity, and real-world application.</p>
                    <p>Our team of experienced mentors offers personalized guidance tailored to each learner’s pace and style, ensuring no one is left behind. We don’t just teach to pass certifications — we coach to build lasting tech careers.
                    </p>
                    <p>We believe a strong tech future begins with strong foundations today. That’s why our efforts are dedicated to developing not only proficient coders and engineers, but also critical thinkers, innovators, and leaders who can shape the digital world.</p>
                </div>

            </div>
        </>
    )
}

export default About
