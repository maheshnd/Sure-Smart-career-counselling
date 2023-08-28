import { useEffect } from "react";
import { scrollToSection } from "./helper";

export const StudentInfoGoogleForm = () => {
  useEffect(() => {
    const ftcoNav = document.getElementById("ftco-nav");
    ftcoNav.classList.remove("show");
    scrollToSection("#studentInfoGoogleForm");
  }, []);
  return (
    <section
      className="ftco-section services-section bg-light"
      id="studentInfoGoogleForm"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-4">The importance of counseling</h2>
            <iframe
              title="studentinfoform"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfTX9BpF1JI1-jXbDjvT56hznAVVOj2OI2lzvWImOJPbQ3W_A/viewform?embedded=true"
              width="500"
              height="500"
              frameborder="0"
              className="mb-4"
              style={{ width: "100%" }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
