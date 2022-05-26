import React from 'react';
import './style.css';

function Project() {
    return(
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

                <section id="resume">
                    <h2>Resume</h2>
                    <div className="resume-div">
                        <a className="resume-link" href="https://docs.google.com/document/d/1eO54TLLeGit64l-VA7ovYjwzBHmMrHArvCy8aN26Rzs/edit" target="_blank">
                                <div className="inner-text">
                                    <p className="resume-text">My Resume</p> 
                                </div>
                        </a>
                    </div>
                </section>
        </main>
    );
}

export default Project;