import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle navbar open/close
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close navbar when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" style={{ fontSize: "30px" }} href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle} // Toggle collapse when button is clicked
          aria-expanded={isOpen} // Dynamically update aria-expanded
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} // Apply 'show' class if navbar is open
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav" style={{ fontSize: "14px" }}>
            <li className="nav-item point">
              <Link
                className="nav-link"
                to="home"
                smooth={true}
                duration={500}
                onClick={handleLinkClick} // Close navbar after link click
              >
                HOME
              </Link>
            </li>
            <li className="nav-item point">
              <Link
                className="nav-link"
                to="service"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                SERVICE
              </Link>
            </li>
            <li className="nav-item point">
              <Link
                className="nav-link"
                to="portfolio"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item point">
              <Link
                className="nav-link"
                to="shop"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                SHOP
              </Link>
            </li>
            <li className="nav-item point">
              <Link
                className="nav-link"
                to="blog"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                BLOG
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/* import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontSize: "30px" }} href="/">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{ fontSize: "14px" }}>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SERVICE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  SHOP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
 */
