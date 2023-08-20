import "./css/Header.css";
import dev_img from "../developer-icon.png";
import resume from "../AlejandroRuiz_Resume.pdf";
import about from "../data/aboutme";

export default function Header() {
  return (
    <div className="hero">
      <section className="left">
        <h3 className="greet">Hi, my name is</h3>
        <h1 className="my-name">
          {about.firstName} {about.lastName}
        </h1>
        <a href={resume} download="AlejandroRuiz_Resume.pdf">
          <button type="button" className="btn">
            Download Resume
          </button>
        </a>
      </section>
      <section className="right">
        <img
          className="dev"
          src={dev_img}
          alt="Illustration of a developer coding on a laptop."
        />
      </section>
    </div>
  );
}
