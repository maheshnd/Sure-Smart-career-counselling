import { BrandName } from "./BrandName";
import { scrollToSection } from "./helper";

export const Navbar = () => {
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
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => scrollToSection("services_section")}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => scrollToSection("about_us")}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => scrollToSection("importanceOfCounseling")}
                >
                  Importance of counseling
                </a>
              </li>
              <li className="nav-item cta">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => scrollToSection("contactus")}
                >
                  <span>Get started</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
