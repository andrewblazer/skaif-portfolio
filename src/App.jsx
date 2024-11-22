import { useEffect } from "react";
import "./App.css";
import GradientButton from "./components/GradientButton";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
// Import the sound file
import clickSound from "./assets/click.wav";
import ContactMe from "./sections/ContactMe";

function App() {
  document.title = "Azfasa's Portfolio";

  useEffect(() => {
    const audio = new Audio(clickSound);

    const playClickSound = (event) => {
      const target = event.target;
      if (target.tagName === "BUTTON" || target.tagName === "A") {
        audio.currentTime = 0; // Reset the sound to start
        audio.play().catch((err) => {
          console.error("Audio play failed:", err);
        });
      }
    };

    document.addEventListener("mousedown", playClickSound);
    return () => {
      document.removeEventListener("mousedown", playClickSound);
    };
  }, []);

  return (
    <main className="mx-auto container flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
