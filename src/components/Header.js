import React from 'react';
import './style.css';

function Header() {
    return (
        <header>
            <h1>JimboCodes</h1>
            <nav>
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact-me">Contact Me</a></li>
                    <li><a href={"https://github.com/jimbolikesgithub"} target="_blank">Github</a></li>
                </ul>
            </nav>
        </header>  
    );
}


export default Header;