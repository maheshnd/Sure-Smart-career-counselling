import { AboutWebsite } from "./AboutWebsite";

export const AboutUs = () => {
  return (
    <section
      className="ftco-section  "
      style={{ padding: "4em 0" }}
      id="about_us"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <h2 className="mb-4">About Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 align-items-center ftco-animate">
            <div className="tab-content ftco-animate" id="v-pills-tabContent">
              <AboutWebsite />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
