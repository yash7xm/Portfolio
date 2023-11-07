import '../assets/Styles/Projects.css'
import Project from './Project'

function Projects() {
    return (
       <div className="projects">
            <div className="header">
                <div className='project-btn'>My Projects</div>
            </div>
            <div className="projects-grid">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
       </div>
    )
}

export default Projects