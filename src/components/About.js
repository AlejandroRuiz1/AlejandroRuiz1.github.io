import "./css/About.css";
import about from "../data/aboutme";

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      {about.intro.map((i) => {
        return (
          <p key={i.id} className="statement">
            {i.desc}
          </p>
        );
      })}
    </div>
  );
}
