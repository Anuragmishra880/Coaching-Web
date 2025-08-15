import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {

    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        })
    }, [])


    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (!target) return;

        const offset = 70; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // Mobile menu close
        const menu = document.querySelector('.navbar-collapse');
        if (menu && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    };


    return (
        <>
            <nav className={`navbar navbar-expand-lg  navbar-dark  fixed-top shadow-sm  ${sticky ? 'nav-dark' : ''} `}>
                <div className="container">
                    <img src={logo} alt="" className='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-2">
                            <li className="nav-item"><a className="nav-link active px-3 py-2" href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#program" onClick={(e) => handleScroll(e, 'program')}>Program</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#campus" onClick={(e) => handleScroll(e, 'campus')}>Campus</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>

                        </ul>
                    </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar
