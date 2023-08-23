import "./css/Header.css";
import dev_img from "../developer-icon.png";
import resume from "../AlejandroRuiz_Resume.pdf";
import about from "../data/aboutme";

export default function Header() {
  return (
    <div className="hero">
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
        <a href={resume} download="AlejandroRuiz_Resume.pdf">
          <button type="button" className="btn">
            Download Resume
          </button>
        </a>
      </div>
      <div className="right">
        <img
          className="dev"
          src={dev_img}
          alt="Illustration of a developer coding on a laptop."
        />
      </div>
    </div>
  );
}
