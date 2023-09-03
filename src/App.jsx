// Stylesheets
// import "./App.css";

// Components
import Projects from "./components/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

// static files
import dev_img from "./static/dev-hero-img.svg";
import logo from "./static/aruiz-logo.png";
import emailIcon from "./static/email-icon.png";
import linkedinIcon from "./static/linkedin-icon.png";
import githubIcon from "./static/github-icon.png";

// documents
import resume from "./static/AlejandroRuiz_Resume.pdf";

// data
import about from "./data/aboutme";
import links from "./data/links";
import experience from "./data/work-experience";
import projects from "./data/projects";

const socialLinks = [
  {
    name: "email",
    href: links["mailTo"],
    alt: "Email Icon",
    src: emailIcon,
  },
  {
    name: "linkedin",
    href: links["linkedin"],
    alt: "LinkedIn Icon",
    src: linkedinIcon,
  },
  {
    name: "github",
    href: links["github"],
    alt: "GitHub Icon",
    src: githubIcon,
  },
];

function App() {
  return (
    <div className="App min-h-screen bg-slate-100 text-black dark:bg-slate-800 dark:text-slate-100 font-lato">
      <Navbar logo={logo} />
      <Header img={dev_img} about={about} resume={resume} links={socialLinks} />
      <WorkExperience experience={experience} />
      <Projects projects={projects} />
      {/* <Contact links={links} /> */}
      <Footer links={links} />
    </div>
  );
}

export default App;
