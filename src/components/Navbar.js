import { useEffect } from "react";
import { BrandName } from "./BrandName";
import { scrollToSection, validSection } from "./helper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const ftcoNav = document.getElementById("ftco-nav");
    ftcoNav.classList.remove("show");
    if (validSection.includes(location?.hash)) {
      scrollToSection(location?.hash);
    }
  }, [location?.hash]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <BrandName />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active nav-list-item">
                <Link to="/#introduction-section" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-list-item">
                <Link to="/#services_section" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item nav-list-item">
                <Link to={"/#about_us"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item nav-list-item">
                <Link className="nav-link" to={"/#importanceOfCounseling"}>
                  Importance of counseling
                </Link>
              </li>
              <li className="nav-item cta nav-list-item">
                <Link to={"/studentInfo"} className="nav-link">
                  <span>Get started</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
