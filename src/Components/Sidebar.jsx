import React, { useEffect, useState } from "react";
import "../assets/Styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [mobile, setMobile] = useState(window.innerWidth <= 900);
  let location = useLocation();
  const [border, setBorder] = useState(location.pathname);

  const handleSetBorder = () => {
    setBorder(location.pathname);
    console.log(border);
  };

  useEffect(() => {
    handleSetBorder();
  }, [location.pathname]);

  const setMobileNav = () => {
    setMobile((prevState) => !prevState);
    if (window.innerWidth > 900) setMobile(false);
    console.log(mobile);
  };

  const handleMenuClickBtn = () => {
    setMobileNav();
  };

  const handleResize = () => {
    setMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="info">
        <div className="name">Yash Poonia</div>
        <div className="desc">
          Passionate computer engineering student excelling in programming, web
          development, and software engineering.
        </div>
        <div className="menu-btn" onClick={handleMenuClickBtn}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className="buttons" style={{ display: mobile ? "none" : "flex" }}>
        <Link to="/">
          <div
            className="projects-btn btn"
            onClick={() => {
              setMobileNav();
            }}
            style={{
              border:
                border !== '/about'
                  ? "1px solid white"
                  : "1px solid  rgba(255, 255, 255, 0.06)",
            }}
          >
            <div className="btn-internal">
              <div className="projects-btn-img btn-img">
                <img
                  src="https://framerusercontent.com/images/4tR2kkcmNDwWLyCTL6UKBxtGk.png"
                  alt=""
                />
              </div>
              <div className="btn-cont">
                <div className="btn-name">Projects</div>
                <div className="btn-desc">My recent projects</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/about">
          <div
            className="about-btn btn"
            onClick={() => {
              setMobileNav();
            }}
            style={{
              border:
                border === '/about'
                  ? "1px solid white"
                  : "1px solid  rgba(255, 255, 255, 0.06)",
            }}
          >
            <div className="btn-internal">
              <div className="about-btn-img btn-img">
                <img
                  src="https://framerusercontent.com/images/4tR2kkcmNDwWLyCTL6UKBxtGk.png"
                  alt=""
                />
              </div>
              <div className="btn-cont">
                <div className="btn-name">About</div>
                <div className="btn-desc">Let's get to know each other</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
