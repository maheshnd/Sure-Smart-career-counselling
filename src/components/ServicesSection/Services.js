import { CollegeApplication } from "./CollegeApplication";
import { Grades11To12 } from "./Grades11To12";
import { Grades8to10 } from "./Grades8to10";
import { SubjectSelector } from "./SubjectSelector";

export const Services = () => {
  return (
    <section className="ftco-section bg-light" id="services_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Services</span>
            <h2 className="mb-4">Explore Our Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 nav-link-wrap mb-5 pb-md-5 pb-sm-1 ftco-animate">
            <div
              className="nav ftco-animate nav-pills justify-content-center text-center"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-nextgen-tab"
                data-toggle="pill"
                href="#v-pills-nextgen"
                role="tab"
                aria-controls="v-pills-nextgen"
                aria-selected="true"
              >
                GRADES 08th TO 10th
              </a>

              <a
                className="nav-link"
                id="v-pills-performance-tab"
                data-toggle="pill"
                href="#v-pills-performance"
                role="tab"
                aria-controls="v-pills-performance"
                aria-selected="false"
              >
                GRADES 11th TO 12th
              </a>

              <a
                className="nav-link"
                id="v-pills-effect-tab"
                data-toggle="pill"
                href="#v-pills-effect"
                role="tab"
                aria-controls="v-pills-effect"
                aria-selected="false"
              >
                Subject Selector
              </a>
              <a
                className="nav-link"
                id="v-pills-effect-tab"
                data-toggle="pill"
                href="#college-application"
                role="tab"
                aria-controls="v-pills-effect"
                aria-selected="false"
              >
                College Application
              </a>
            </div>
          </div>
          <div className="col-md-12 align-items-center ftco-animate">
            <div className="tab-content ftco-animate" id="v-pills-tabContent">
              <Grades8to10 />
              <Grades11To12 />
              <SubjectSelector />
              <CollegeApplication />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
