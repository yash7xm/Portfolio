import { useState } from 'react'
import '../assets/Styles/Projects.css'
import Project from './Project'
import ExpandProject from './ExpandProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    const [view, setView] = useState(-1);

    const changeView = (index) => {
        console.log(index);
        document.querySelector('.view').scrollTo(0, 0);
        setView(index);
    }

    let projects = [];

    for (let i = 0; i < 6; i++) {
        projects.push(<Project index={i} changeView={changeView} />);
    }

    return (
        <div className="projects">
            <div className="header">
                {view === -1 ? (
                    <div className='project-btn'>My Projects</div>
                ) :
                    (
                        <div className='project-btn return-btn' onClick={() => changeView(-1)}>
                            <FontAwesomeIcon icon={faArrowLeft} color='rgba(255, 255, 255, 0.6)' />
                            <span> </span>
                            See All Projects
                        </div>
                    )}

            </div>
            <div className="view">
                {view === -1 ? (
                    <div className="projects-grid">
                        {...projects}
                    </div>
                ) : <ExpandProject index={view} />}
            </div>

        </div>
    )
}

export default Projects
