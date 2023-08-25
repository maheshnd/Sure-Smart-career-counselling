import { AboutCounsellor } from "./AboutCounsellor";
import { AboutWebsite } from "./AboutWebsite";

export const AboutUs = () => {
  return (
    <section
      className="ftco-section ftco-no-pt ftc-no-pb"
      style={{ padding: "4em 0" }}
      id="about_us"
    >
      <div className="container">
        <div className="row">
          <AboutWebsite />
          {/* <AboutCounsellor /> */}
        </div>
      </div>
    </section>
  );
};
