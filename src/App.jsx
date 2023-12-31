/* eslint-disable quotes */
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarsCanvas from "./components/Stars";
import Education from "./components/Education";

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-screen h-screen z-10">
        <Home />
        <StarsCanvas />
      </div>
      <div className="relative z-0 bg-navy">
        <Navbar />
        <About />
        <Education />
        <TechStack />
        <Work />
        <div className="contact mb-80">
          <Contact />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
