import "./css/WorkExperience.css";

const Experience = ({ experience }) => {
  return (
    <div id="work-experience" className="article-container">
      <h1>Work Experience</h1>
      {Object.keys(experience).map((job) => (
        <article className="card" id={experience[job].company} key={job.key}>
          <h2>{experience[job].company}</h2>
          <div className="content">
            <div className="details">
              <p>{experience[job].role}</p>
              <p>{experience[job].timeFrame}</p>
              <p>{experience[job].location}</p>
            </div>
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
          </div>
        </article>
      ))}
    </div>
  );
};

export default function WorkExperience({ experience }) {
  return <Experience experience={experience} />;
}
