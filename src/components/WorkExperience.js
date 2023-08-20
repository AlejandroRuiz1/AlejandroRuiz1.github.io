import "./css/WorkExperience.css";
import experience from "../data/work-experience";

export default function WorkExperience() {
  return (
    <div id="work-experience" className="article-container">
      <h1>Work Experience</h1>
      {Object.keys(experience).map((job, index) => {
        <article id={experience[job].company}>
          <h2>{experience[job].company}</h2>
        </article>;
      })}
    </div>
  );
}
