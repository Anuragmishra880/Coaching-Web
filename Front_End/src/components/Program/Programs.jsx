import React from 'react'
import './Programs.css'
import program1 from '../../assets/MERN.jpeg'
import program2 from '../../assets/javaDevelopment.jpeg'
import program3 from '../../assets/Cyber-Security.jpeg'
// import program_icon1 from '../../assets/program-icon-1.png'
// import program_icon2 from '../../assets/program-icon-2.png'
// import program_icon3 from '../../assets/program-icon-3.png'
import MERN from '../../assets/mern_stack_web.pdf'
import JAVA from '../../assets/Java Development Expert.pdf'
import Cyber from '../../assets/Cyber Security Expert.pdf'
const Programs = () => { 
    return (
        <>
            <div className='programs' id='program'>
                <div className="program">
                    <img src={program1} alt="" />
                    <h3>MERN Stack Web Development</h3>
                    <p>Master full stack web development technologies like MongoDB, Express.JS, React JS, and Node.JS</p>


                    <a href={MERN} download="MERN_Stack_Course.pdf">Explore Course</a>

                </div>
                <div className="program">
                    <img src={program2} alt="" />
                    <h3>JAVA Development</h3>
                    <p>Master Java with hands-on coding,real world projects, and expert guidance.</p>

                    <a href={JAVA} download='Java Development Expert.pdf'>Explore Course</a>


                </div>
                <div className="program">
                    <img src={program3} alt="" />
                    <h3>Cyber-Security / Ethical-Hacking</h3>
                    <p>Master cyber security skills, stop hackers, protect data, secure networks — practical training for a safer digital future.</p>

                    <a href={Cyber} download='Cyber Security Expert.pdf'>Explore Course</a>

                </div>
            </div>
            {/* <div className='course-container'>

                <a href="" className='btn seeMoreBtn '>Browse Course</a>
            </div> */}
        </>
    )
}

export default Programs
