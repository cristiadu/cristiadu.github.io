import React from 'react';

const HeaderNavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu"
                            aria-expanded="false">
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

                    <div id="menu" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://drive.google.com/file/d/1kERzdkx42MpyvROyGb-dNlfglavPgzDc/view?usp=sharing"
                                target="_blank"><i className="fa fa-user"></i> Resume</a></li>
                            <li><a href="#projects"><i className="fa fa-cogs"></i> Projects</a></li>
                            <li><a href="#skills"><i className="fas fa-chess-rook"></i> Skills</a></li>
                            <li><a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank"><i className="fab fa-linkedin"></i>
                                LinkedIn</a></li>
                            <li><a href="#contact"><i className="fa fa-commenting-o"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        )
}

export default HeaderNavBar;
