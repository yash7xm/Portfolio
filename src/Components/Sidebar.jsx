import '../assets/Styles/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="info">
                <div className="name">Yash Poonia</div>
                <div className="desc">Passionate computer engineering student excelling in programming, web development, and software engineering.</div>
            </div>
            <div className="buttons">
                <div className="projects-btn btn">
                    <div className="projects-btn-img">
                        {/* <img src="src/assets/Images/img4.jpg" alt="" /> */}
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
                <div className="about-btn btn">
                    <div className="about-btn-img">
                        {/* <img src="src/assets/Images/img4.jpg" alt="" /> */}
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

export default Sidebar