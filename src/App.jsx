import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Skills from "./sections/Skills";

function App() {
  return (
    <main className="mx-auto container flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
