import "../assets/Styles/ExpandProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
            <img
              src="https://res.cloudinary.com/dgl5jcwgb/image/upload/v1700902394/semmi_nnl2n0.png"
              alt="ProjectImage"
            />
          </div>
        </div>

        <div className="main-info">
          <div className="title">
            <span>Vyzon</span> is a versatile and custom-tailored programming
            language designed to provide coders with the freedom to shape their
            coding experiences.
          </div>

          <div className="features">
            <div className="summary">
              <div className="head">Summary</div>
              <div className="body">
                Designed a custom programming language, built an interpreter,
                and developed language-processing tools, showcasing language
                development expertise.
              </div>
            </div>
            <div className="tech-stack">
              <div className="head">Tech Stack</div>
              <div className="body">Javascript</div>
            </div>
            <div className="links">
              <div className="head">Links</div>
              <div className="body">
                <a href="">[GitHub]</a>
                <a href="">[Website]</a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-vid">
          <div className="vid">
            <img
              src="https://framerusercontent.com/images/0L4ByzyLonZaaYGw9F7w0kkuEo.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandProject;
