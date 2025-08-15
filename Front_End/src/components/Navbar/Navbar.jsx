import { useState, useEffect } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            if (window.scrollY > 50) setSticky(true);
            else setSticky(false);
        };

        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const handleLinkClick = () => {
        const menu = document.querySelector('.navbar-collapse');
        if (menu && menu.classList.contains('show')) menu.classList.remove('show');
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-top shadow-sm ${sticky ? 'nav-dark' : ''}`}>
                <div className="container">
                    <img src={logo} alt="Logo" className="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-2">
                            <li className="nav-item">
                                <LinkScroll
                                    className="nav-link active px-3 py-2"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={300}
                                    onClick={handleLinkClick}
                                >
                                    Home
                                </LinkScroll>
                            </li>
                            <li className="nav-item">
                                <LinkScroll
                                    className="nav-link active px-3 py-2"
                                    to="program"
                                    spy={true}
                                    smooth={true}
                                    offset={-285}
                                    duration={300}
                                    onClick={handleLinkClick}
                                >
                                    Program
                                </LinkScroll>
                            </li>
                            <li className="nav-item">
                                <LinkScroll
                                    className="nav-link active px-3 py-2"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-140}
                                    duration={300}
                                    onClick={handleLinkClick}
                                >
                                    About
                                </LinkScroll>
                            </li>
                            <li className="nav-item">
                                <LinkScroll
                                    className="nav-link active px-3 py-2"
                                    to="campus"
                                    spy={true}
                                    smooth={true}
                                    offset={-290}
                                    duration={300}
                                    onClick={handleLinkClick}
                                >
                                    Campus
                                </LinkScroll>
                            </li>
                            <li className="nav-item">
                                <LinkScroll
                                    className="nav-link active px-3 py-2"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-10}
                                    duration={300}
                                    onClick={handleLinkClick}
                                >
                                    Contact
                                </LinkScroll>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
