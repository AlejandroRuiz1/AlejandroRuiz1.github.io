// components
import Projects from "./components/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Internships from "./components/Internships";
import Skills from "./components/Skills";

// static files
import dev_img from "./static/dev.svg";
import logo from "./static/aruiz-logo.png";

// data
import about from "./data/aboutme";
import links from "./data/links";
import experience from "./data/work-experience";
import projects from "./data/projects";
import logos from "./data/logos";


function App() {
  return (
    <div className="flex flex-col relative min-h-full">
      <div className="pb-10">
        <Navbar logo={logo} />
        <Header img={dev_img} about={about} links={links} />
        <Skills logos={logos} />
        <Internships experience={experience} />
        <Projects projects={projects} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
