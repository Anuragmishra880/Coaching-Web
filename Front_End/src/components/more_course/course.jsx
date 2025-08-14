import React from 'react'
import './course.css'
import program1 from '../../assets/MERN.jpeg'
import program2 from '../../assets/JavaDevelopment.jpeg'
import program3 from '../../assets/Cyber-Security.jpeg'
const course = () => {
    return (
        <div>
            <div className='programs' id='program'>
                <div className="program">
                    <img src={program1} alt="" />
                    <h3>MERN Stack Web Development</h3>
                    <p>Master full stack web development technologies like MongoDB, Express.JS, React JS, and Node.JS</p>
                    <div>

                        <a href={MERN} download="MERN_Stack_Course.pdf">Explore Course</a>
                    </div>
                </div>
                <div className="program">
                    <img src={program2} alt="" />
                    <h3>JAVA Development</h3>
                    <p>Master Java with hands-on coding,real world projects, and expert guidance.</p>
                    <div>
                        <a href='#'>Explore Course</a>
                    </div>

                </div>
                <div className="program">
                    <img src={program3} alt="" />
                    <h3>Cyber-Security / Ethical-Hacking</h3>
                    <p>Master cyber security skills, stop hackers, protect data, secure networks — practical training for a safer digital future.</p>
                    <div>
                        <a href='#'>Explore Course</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default course
