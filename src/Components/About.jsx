import '../assets/Styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="abt-btn">
                About Me
            </div>
            <div className="abt-content">
                <div className="as0">
                    <div className="my-img">

                    </div>
                    <div className="my-info">
                        <div className='hd'>Hi, I'm Yash  👋🏼</div>
                        <div className='bdy mrb'>A Computer Engineering student passionate about programming language development, web tech, and software engineering. I'm focused on creating innovative projects and tackling coding challenges. Beyond academia, I've crafted a custom language, built an Integrated Learning Platform (ILP), and led the development of an interactive typing web app.</div>
                        <div className="bdy">Outside the digital world, I enjoy exploring code conversion intricacies, participating in coding competitions, and constantly seeking growth opportunities. My commitment to excellence in academics and projects mirrors my passion for pushing the boundaries of what's possible in the tech realm. Let's connect and explore the limitless possibilities of coding together!</div>
                    </div>

                </div>
                <div className="as1">
                    <div className="edu">
                        <div className="hd">Education</div>
                        <div className="bdy">2021 - 2025</div>
                        <div className='bdy mrb'>↳ Computer science and engineering</div>
                        {/* <div className="bdy">2019 - 2020</div>
                        <div className="bdy">↳ Class 12 (CBSE)</div>
                        <div className="bdy mrb">↳ 90.8%</div>
                        <div className="bdy">2017 - 2018</div>
                        <div className="bdy">↳ Class 10 (CBSE)</div>
                        <div className="bdy mrb">↳ 93.4%</div> */}
                    </div>
                    <div className="skills">
                        <div className="hd">Skills</div>
                       <div className="sk">
                       <div className="sk0">
                            <div className="bdy">Programming Languages</div>
                            <div className='bdy'>↳ JavaScript</div>
                            <div className="bdy">↳ Java</div>
                            <div className="bdy">↳ Python</div>
                            <div className='bdy'>↳ TypeScript</div>
                            <div className="bdy">↳ C++</div>
                            <div className="bdy">↳ C</div>
                        </div>
                        <div className="sk1">
                            <div className="bdy">Web Technologies</div>
                            <div className='bdy'>↳ Node.js</div>
                            <div className="bdy">↳ Express.js</div>
                            <div className='bdy'>↳ React</div>
                            <div className="bdy">↳ MongoDB</div>
                            <div className="bdy">↳ HTML</div>
                            <div className="bdy">↳ CSS</div>
                            <div className="bdy">↳ EJS</div>
                            <div className="bdy">↳ Three.js</div>
                        </div>
                        <div className="sk2">
                            <div className="bdy">Operating Systems</div>
                            <div className='bdy'>↳ Linux</div>
                            <div className="bdy">↳ Windows</div>
                        </div>
                       </div>
                    </div>
                    <div className="contact">
                        <div className="hd">Contact</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About