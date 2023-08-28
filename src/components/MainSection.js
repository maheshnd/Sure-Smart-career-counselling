import { AboutUs } from "./About/AboutUs";
import { ContactUs } from "./ContactUs";
import { ImportanceOfCounseling } from "./ImportanceOfCounseling";
import { IntroductionSection } from "./IntroductionSection";
import { Services } from "./ServicesSection/Services";

export const MainSection = () => {
  return (
    <>
      <IntroductionSection />
      <ImportanceOfCounseling />
      <Services />
      <AboutUs />
      <ContactUs />
    </>
  );
};
