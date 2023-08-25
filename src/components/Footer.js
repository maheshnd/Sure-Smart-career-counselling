import { BrandName } from "./BrandName";
import { scrollToSection } from "./helper";

export const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 bg-primary p-4">
              <h2 className="ftco-heading-2">
                <BrandName />
              </h2>
              <p>
                Success is not the key to happiness. Happiness is the key to
                success. If you love what you are doing, you will be
                successful."
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Fallow US</h2>
              <ul className="ftco-footer-social list-unstyled mb-0">
                <li className="ftco-animate">
                  <a href="https://twitter.com" target="_blank">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.facebook.com/" target="_blank">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/" target="_blank">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 d-block"
                    onClick={() => scrollToSection("services_section")}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 d-block"
                    onClick={() => scrollToSection("about_us")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 d-block"
                    onClick={() => scrollToSection("importanceOfCounseling")}
                  >
                    Importance of counseling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 d-block"
                    onClick={() => scrollToSection("contactus")}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Office</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      205 B Wing St.Testing , Test test, Test, India
                    </span>
                  </li>
                  <li>
                    <a href="tel:+919822380862">
                      <span className="icon icon-phone"></span>
                      <span className="text">+91 9822380862</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:ssuresmart@gmail.com?subject=Seeking%20Consultation%20Advice">
                      <span className="icon icon-envelope"></span>
                      <span className="text">ssuresmart@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved by{" "}
              <a href="" target="_blank">
                Sure Smart
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
