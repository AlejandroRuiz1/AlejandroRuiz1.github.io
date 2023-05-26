import logo from "./logo.svg";
import "./css/App.css";
import "./css/Header.css";
import "./css/About.css";
import "./css/Projects.css";
import "./css/Contact.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <navbar className="navbar">
        <a href="#about">
          <h3>About</h3>
        </a>
        <a href="#projects">
          <h3>Projects</h3>
        </a>
        <a href="#contact">
          <h3>Contact Me</h3>
        </a>
      </navbar>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
