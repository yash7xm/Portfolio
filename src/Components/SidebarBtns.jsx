import '../assets/Styles/SidebarBtns.css'

function SidebarBtns({changeContent, mobile}) {
    return (
        <div className="buttons" style={{ display: mobile === 1 ? 'flex' : 'none' }}>
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
    )
}

export default SidebarBtns