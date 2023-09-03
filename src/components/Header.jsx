import "./css/Header.css";
import Contact from "./Contact.jsx";

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
          <button
            type="button"
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
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
    <div className="">
      <Left about={about} resume={resume} links={links} />
      <Right img={img} />
    </div>
  );
}
