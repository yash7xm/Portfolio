import '../assets/Styles/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Project({index, changeView}) {
    return (
        <div className="project" onClick={() => changeView(index)}>
            <div className="project-img">
                <div className="img">
                    <img src="https://res.cloudinary.com/dgl5jcwgb/image/upload/v1700897021/semicolon_lx52cl.png" alt="Vyzon" />
                </div>
            </div>
            <div className="project-info">
                <div className="p-info">
                    <div className="project-name">
                        <div className="p-name">
                            Vyzon
                        </div>
                        <div className="p-short-info">
                            Programming Language
                        </div>
                    </div>
                    <div className="project-desc">
                        A custom programming language with support for basic
                        operations, loops, conditionals, functional, and object-oriented
                        programming.
                    </div>
                    <div className="project-date">
                        <div className="date">2023</div>
                        <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project