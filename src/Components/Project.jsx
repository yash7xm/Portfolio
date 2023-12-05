import "../assets/Styles/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Project({displayData}) {
  console.log(displayData);
  return (
    <div className="project">
      <div className="project-img">
        <div className="img">
          <img
            src = {displayData.mainImg}
            alt = {displayData.pName}
          />
        </div>
      </div>
      <div className="project-info">
        <div className="p-info">
          <div className="project-name">
            <div className="p-name">{displayData.pName}</div>
            <div className="p-short-info">{displayData.pShortInfo}</div>
          </div>
          <div className="project-desc">
          {displayData.pDesc}
          </div>
          <div className="project-date">
            <div className="date">{displayData.year}</div>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
