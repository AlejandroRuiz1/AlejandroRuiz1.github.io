import "./css/navbar.css";

const Nav = ({ logo }) => {
  return (
    <nav>
      <a className="logo" href="/">
        <img alt="aruiz.dev logo" src={logo} />
      </a>
      <span className="spacer"></span>
      <div className="link-container">
        <a className="nav-link" href="#work-experience">
          Work
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
};

export default function Navbar({ logo }) {
  return <Nav logo={logo} />;
}
