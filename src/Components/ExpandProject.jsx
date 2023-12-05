import "../assets/Styles/ExpandProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "../utils/projectsData";

function ExpandProject() {
  return (
    <div className="project-detail">
      <Link to="/">
        <div className="header">
          <div className="project-btn return-btn">
            <FontAwesomeIcon
              icon={faArrowLeft}
              color="rgba(255, 255, 255, 0.6)"
            />
            <span> </span>
            See All Projects
          </div>
        </div>
      </Link>
      <div className="project-detail-content">
        <div className="main-img">
          <div className="inner-img">
            <img src={data[0].mainImg} alt="ProjectImage" />
          </div>
        </div>

        <div className="main-info">
          <div className="title">
            <span>{data[0].pName}</span> {data[0].mainInfo}
          </div>

          <div className="features">
            <div className="summary">
              <div className="head">Summary</div>
              <div className="body">{data[0].body}</div>
            </div>
            <div className="tech-stack">
              <div className="head">Tech Stack</div>
              {data[0].techStack.map((tech, index) => (
                <div key={index} className="body">
                  {tech}
                </div>
              ))}
            </div>
            <div className="links">
              <div className="head">Links</div>
              <div className="body">
                <a href={data[0].gitLink}>[GitHub]</a>
                <a href={data[0].webLink}>[Website]</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-vid">
          <div className="vid">
            <img src={data[0].vidLink} alt="" />
          </div>
        </div>
        <div className="project-text-0 project-text">
          <div className="text">
            <div className="hd">{data[0].projectText[0].head}</div>
            <div className="bdy mrb">{data[0].projectText[0].body[0]}</div>
            <div className="bdy mrb">{data[0].projectText[0].body[1]}</div>
            <div className="bdy mrb">{data[0].projectText[0].body[2]}</div>
          </div>
        </div>

        <div className="flow-chart">
          <img src={data[0].flowChart} alt="" />
        </div>

        <div className="project-text-0 project-text">
          <div className="text">
            <div className="hd">{data[0].projectText[1].head}</div>
            <div className="bdy mrb">{data[0].projectText[1].body[0]}</div>
            <div className="bdy mrb">{data[0].projectText[1].body[1]}</div>
            <div className="bdy mrb">{data[0].projectText[1].body[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandProject;
