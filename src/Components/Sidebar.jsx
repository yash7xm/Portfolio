import '../assets/Styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Sidebar({changeContent}) {
    const[mobile, setMobile] = useState(1);
    
    const setMobileNav = () => {
        setMobile(prevState => (prevState === 0 ? 1 : 0));
        console.log(mobile);
    }

    return (
        <div className="sidebar">
            <div className="info">
                <div className="name">Yash Poonia</div>
                <div className="desc">Passionate computer engineering student excelling in programming, web development, and software engineering.</div>
                <div className="menu-btn" onClick={setMobileNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
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
        </div>
    )
}

export default Sidebar