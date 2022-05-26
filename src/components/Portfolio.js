import React from 'react';
import './style.css';

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function Portfolio() {
  // const message = 'Hello world! I am a React Component';
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  return (
    <div className="container">

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

<main>

    <section id="banner">
        <p>Always a work in progress...</p>
    </section>

    <section id="about-me">
        <h2>About Me</h2>
        <div className="about-me-content">
            <p>My name is James Edwards. Currently 20 years old,
                living in Georgia, but born in Santa Monica, California. 
                I was introduced to coding in high school and have been 
                doing it ever since. I'm a simple man, and enjoy simple 
                things, including (but not limited to): anime, manga, KPOP,
                language and literature, video making, cats, and, of course...
                programming!
            </p>
            <p>My first project was in my senior year of high school, where
                I build a simple, unresponsive anime fanpage. My next and
                biggest project was a year later, where I build a responsive
                website for a door and windows company in my small town. Ever
                since, I've been creating little projects here and there, such 
                as the one's listed below. Let me just make one thing very clear; 
                I LOVE programming. I'll continue to hone my craft, and I hope it
                shows. 
            </p>
        </div>
    </section>

    <section id="projects">
            <h2>Work</h2>
                <div className="project-cards flex-div">
                    <a className="project-img aadandw" href="https://www.allamericandoorsandwindowsinc.com/index.html" target="_blank">
                        <div className="inner-text">
                            <p>Company</p> 
                        </div>
                    </a>

                    <a className="project-img fanpage" href="https://codepen.io/jimbolikesgithub/full/GROOGOR" target="_blank">
                        <div className="inner-text">
                            <p>Fanpage</p> 
                        </div>
                    </a>

                    <a className="project-img survey" href="https://brandonsnyder.github.io/Employed/" target="_blank">
                        <div className="inner-text">
                            <p>Project 2</p> 
                        </div>
                    </a>


                    <a className="project-img timeline" href="https://codepen.io/jimbolikesgithub/full/VwrxeYZ" target="_blank">
                        <div class="inner-text">
                            <p>Timeline</p> 
                        </div>
                    </a>

                    <a className="project-img landing-page" href="https://jpugmire.github.io/" target="_blank">
                        <div className="inner-text">
                            <p>Project 1</p> 
                        </div>
                    </a>
            </div>
        </section>

</main>


<footer id="contact-me">
    <h2>Contact Me</h2>
    <div>
        <p>555.555.555</p>
        <p>edwards.econn@gmail.com</p>
    </div>
</footer>
    </div>
  );
}

export default Portfolio;
