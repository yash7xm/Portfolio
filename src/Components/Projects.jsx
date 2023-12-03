import { useState } from "react";
import "../assets/Styles/Projects.css";
import Project from "./Project";
import ExpandProject from "./ExpandProject";
import { Link } from "react-router-dom";

function Projects() {
  const [view, setView] = useState(-1);

  const changeView = (index) => {
    console.log(index);
    document.querySelector(".projects").scrollTo(0, 0);
    setView(index);
  };

  let projects = [];

  for (let i = 0; i < 6; i++) {
    projects.push(
      <Link to="/project/pid">
        <Project index={i} changeView={changeView} />
      </Link>
    );
  }

  return (
    <div className="projects">
      <div className="header">
        <div className="project-btn">My Projects</div>
      </div>
      <div className="view">
        {view === -1 ? (
          <div className="projects-grid">{...projects}</div>
        ) : (
          <ExpandProject index={view} />
        )}
      </div>
    </div>
  );
}

export default Projects;
