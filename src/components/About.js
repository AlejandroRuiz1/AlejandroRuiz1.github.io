import "./css/About.css";
import about from "../data/aboutme";

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      {about.intro.map((i) => {
        return <p className="statement">{i}</p>;
      })}
    </div>
  );
}
