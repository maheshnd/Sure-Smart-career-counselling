import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";
import { Navbar } from "./components/Navbar";
import { StudentInfoGoogleForm } from "./components/StudentInfoGoogleForm";
import { WhatsAppChat } from "./components/WhatsAppChat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<MainSection />} />
        <Route path="/studentInfo" element={<StudentInfoGoogleForm />} />
      </Routes>
      <WhatsAppChat />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
