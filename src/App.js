import { AboutUs } from "./components/About/AboutUs1";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { ImportanceOfCounseling } from "./components/ImportanceOfCounseling";
import { IntroductionSection } from "./components/IntroductionSection";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/ServicesSection/Services";
import { WhatsAppChat } from "./components/WhatsAppChat";

function App() {
  return (
    <>
      <Navbar />
      <WhatsAppChat />
      <IntroductionSection />
      <ImportanceOfCounseling />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
