import '../assets/Styles/ExpandProject.css'

function ExpandProject() {
    return (
        <div className="project-detail">
            <div className="main-img">
                <div className="inner-img">
                    <img src="https://res.cloudinary.com/dgl5jcwgb/image/upload/v1700902394/semmi_nnl2n0.png" alt="ProjectImage" />
                </div>
            </div>

            <div className="main-info">
                <div className="title">
                    <span>Vyzon</span> is a versatile and custom-tailored programming language designed to provide coders with the freedom to shape their coding experiences.
                </div>

                <div className="features">
                    <div className="summary">
                        <div className="head">
                            Summary
                        </div>
                        <div className="body">
                            Designed a custom programming language, built an interpreter, and developed language-processing tools, showcasing language development expertise.
                        </div>
                    </div>
                    <div className="tech-stack">
                        <div className="head">
                            Tech Stack
                        </div>
                        <div className="body">
                            Javascript
                        </div>
                    </div>
                    <div className="links">
                        <div className="head">
                            Links
                        </div>
                        <div className="body">
                            <a href="">[GitHub]</a>
                            <a href="">[Website]</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandProject