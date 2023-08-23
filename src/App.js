import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      {/* <About /> */}
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
