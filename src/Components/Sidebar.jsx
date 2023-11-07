import '../assets/Styles/Sidebar.css'

function Sidebar({changeContent}) {
    return (
        <div className="sidebar">
            <div className="info">
                <div className="name">Yash Poonia</div>
                <div className="desc">Passionate computer engineering student excelling in programming, web development, and software engineering.</div>
            </div>
            <div className="buttons">
                <div className="projects-btn btn" onClick={() => changeContent(0)}>
                    <div className="btn-internal">
                        <div className="projects-btn-img btn-img">
                            <img src="https://framerusercontent.com/images/4tR2kkcmNDwWLyCTL6UKBxtGk.png" alt="" />
                        </div>
                        <div className="btn-cont">
                            <div className="btn-name">
                                Projects
                            </div>
                            <div className="btn-desc">
                                My recent projects
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-btn btn" onClick={() => changeContent(1)}>
                    <div className="btn-internal">
                        <div className="about-btn-img btn-img">
                            <img src="https://framerusercontent.com/images/4tR2kkcmNDwWLyCTL6UKBxtGk.png" alt="" />
                        </div>
                        <div className="btn-cont">
                            <div className="btn-name">
                                About
                            </div>
                            <div className="btn-desc">
                                Let's get to know each other
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar