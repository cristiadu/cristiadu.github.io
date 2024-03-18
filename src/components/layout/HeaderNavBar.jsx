import React, { useState } from 'react';
import { Link } from 'react-scroll';

const HeaderNavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    const closeMenu = () => {
        setIsCollapsed(true);
    }

    return (
        <header>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className={`navbar-toggle ${isCollapsed ? 'collapsed' : ''}`} onClick={handleToggle}
                            aria-expanded={!isCollapsed}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-text-container">
                            <a className="navbar-text" href="index.html">
                                <h1>Cristiano Faustino</h1>
                            </a>
                        </div>
                    </div>

                    <div id="menu" className={`navbar-collapse ${isCollapsed ? 'collapse' : ''}`}>
                        <ul className="nav navbar-nav navbar-right" onClick={closeMenu}>
                            <li><a href="https://drive.google.com/file/d/1cD4wZK0Z4qqOXOH_8XwoIVWl1uVh9lZ-/view?usp=sharing"
                                target="_blank"><i className="fa fa-user"></i> Resume</a></li>
                            <li><Link as='a' to="projects" spy={true} smooth={true} offset={-100} duration={900}><i className="fa fa-cogs"></i> Projects</Link></li>
                            <li><Link as='a' to="skills" spy={true} smooth={true} offset={-100} duration={900}><i className="fa fa-chess-rook"></i> Skills</Link></li>
                            <li><a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                            <li><Link as='a' to="contact" spy={true} smooth={true} offset={-100} duration={900}><i className="fa fa-commenting-o"></i> Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderNavBar;
