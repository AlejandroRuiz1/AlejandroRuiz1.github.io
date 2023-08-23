import "./css/WorkExperience.css";
import experience from "../data/work-experience";

export default function WorkExperience() {
  return (
    <div id="work-experience" className="article-container">
      <h1>Work Experience</h1>
      {Object.keys(experience).map((job) => (
        <article id={experience[job].company} key={job.key}>
          <h2>{experience[job].company}</h2>
          <p>{experience[job].role}</p>
          <p>{experience[job].timeFrame}</p>
          <p>{experience[job].location}</p>
          <div className="responsibilities">
            <h3>My responsibilities included:</h3>
            <ul>
              {experience[job].responsibilities.map((res) => {
                return (
                  <li className="responibility" key={res.id}>
                    {res.desc}
                  </li>
                );
              })}
            </ul>
          </div>
          <h3>Technologies used:</h3>
          <div className="technologies">
            {Object.keys(experience[job].technologies).map((technology) => {
              return (
                <p className="technology" key={technology.id}>
                  {experience[job].technologies[technology].desc}
                </p>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
