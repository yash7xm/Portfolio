import "../assets/Styles/ExpandProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "../utils/projectsData";
import { useParams } from "react-router-dom";

function ExpandProject() {
  const {pName} = useParams();
  
  let idx = 0;
  for(let i=0; i<data.length; i++){
    if(data[i].pName.toLowerCase() === pName.toLowerCase()) idx = i;
  }

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
            <img src={data[idx].mainImg} alt="ProjectImage" />
          </div>
        </div>

        <div className="main-info">
          <div className="title">
            <span>{data[idx].pName}</span> {data[idx].mainInfo}
          </div>

          <div className="features">
            <div className="summary">
              <div className="head">Summary</div>
              <div className="body">{data[idx].body}</div>
            </div>
            <div className="tech-stack">
              <div className="head">Tech Stack</div>
              {data[idx].techStack.map((tech, index) => (
                <div key={index} className="body">
                  {tech}
                </div>
              ))}
            </div>
            <div className="links">
              <div className="head">Links</div>
              <div className="body">
                <a href={data[idx].gitLink}>[GitHub]</a>
                <a href={data[idx].webLink}>[Website]</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-vid">
          <div className="vid">
            <img src={data[idx].vidLink} alt="" />
          </div>
        </div>
        <div className="project-text-0 project-text">
          <div className="text">
            <div className="hd">{data[idx].projectText[0].head}</div>
            <div className="bdy mrb">{data[idx].projectText[0].body[0]}</div>
            <div className="bdy mrb">{data[idx].projectText[0].body[1]}</div>
            <div className="bdy mrb">{data[idx].projectText[0].body[2]}</div>
          </div>
        </div>

        <div className="flow-chart">
          <img src={data[idx].flowChart} alt="" />
        </div>

        <div className="project-text-0 project-text">
          <div className="text">
            <div className="hd">{data[idx].projectText[1].head}</div>
            <div className="bdy mrb">{data[idx].projectText[1].body[0]}</div>
            <div className="bdy mrb">{data[idx].projectText[1].body[1]}</div>
            <div className="bdy mrb">{data[idx].projectText[1].body[2]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandProject;
