import "./css/Header.css";
import Contact from "./Contact.js";

const Left = ({ about, resume, links }) => {
  return (
    <div className="left">
      <h3 className="greet">
        Hi, my name is{" "}
        <span className="name">
          {about.firstName}&nbsp;{about.lastName}
        </span>
        .
      </h3>
      {about.intro.map((i) => {
        return (
          <p className="statement" key={i.id}>
            {i.desc}
          </p>
        );
      })}
      <Contact links={links} />
      <div id="resume-btn">
        <a href={resume} download="AlejandroRuiz_Resume.pdf">
          <button type="button" className="btn">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

const Right = ({ img }) => {
  return (
    <div className="right">
      <img
        className="dev"
        src={img}
        alt="Illustration of a developer coding on a laptop."
      />
    </div>
  );
};

export default function Header({ img, about, resume, links }) {
  return (
    <div className="hero">
      <Left about={about} resume={resume} links={links} />
      <Right img={img} />
    </div>
  );
}
