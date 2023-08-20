import "./css/navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <a href="#about">
        <h3>About</h3>
      </a>
      <a href="#projects">
        <h3>Projects</h3>
      </a>
      <a href="#contact" className="contact">
        <h3>Contact Me</h3>
      </a>
    </div>
  );
}
