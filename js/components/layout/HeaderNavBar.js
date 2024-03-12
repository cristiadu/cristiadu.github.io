import React from 'react';

const HeaderNavBar = () => {
    return (
        <header>
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu"
                            aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="navbar-text-container">
                            <a class="navbar-text" href="index.html">
                                <h1>Cristiano Faustino</h1>
                            </a>
                        </div>
                    </div>

                    <div id="menu" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="https://drive.google.com/file/d/1kERzdkx42MpyvROyGb-dNlfglavPgzDc/view?usp=sharing"
                                target="_blank"><i class="fa fa-user"></i> Resume</a></li>
                            <li><a href="#projects"><i class="fa fa-cogs"></i> Projects</a></li>
                            <li><a href="#skills"><i class="fas fa-chess-rook"></i> Skills</a></li>
                            <li><a href="https://www.linkedin.com/in/cristianofaustino/" target="_blank"><i class="fab fa-linkedin"></i>
                                LinkedIn</a></li>
                            <li><a href="#contact"><i class="fa fa-commenting-o"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        )
}

export default HeaderNavBar;
