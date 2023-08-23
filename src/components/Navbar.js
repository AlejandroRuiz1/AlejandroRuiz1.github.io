import "./css/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <span className="spacer"></span>
      <div className="link-container">
        <a className="nav-link" href="#about">
          About
        </a>
      </div>
      <div className="link-container">
        <a className="nav-link" href="#projects">
          Projects
        </a>
      </div>
      <div className="link-container">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
