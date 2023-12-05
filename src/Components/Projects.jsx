import { useState } from "react";
import "../assets/Styles/Projects.css";
import Project from "./Project";
import ExpandProject from "./ExpandProject";
import { Link } from "react-router-dom";
import data from "../utils/projectsData";

function Projects() {
  const [view, setView] = useState(-1);
  const pData = data;

  const changeView = (index) => {
    console.log(index);
    document.querySelector(".projects").scrollTo(0, 0);
    setView(index);
  };

  let projects = [];

  for (let i = 0; i < data.length; i++) {
    projects.push(
      <Link to="/project/pid">
        <Project displayData = {pData[i]}/>
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
