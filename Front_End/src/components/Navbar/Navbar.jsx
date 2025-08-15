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
                            <li className="nav-item"><a className="nav-link active px-3 py-2" href="home">Home</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#program">Program</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#campus">Campus</a></li>
                            <li className="nav-item"><a className="nav-link px-3 py-2" href="#contact">Contact</a></li>

                        </ul>
                    </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar
