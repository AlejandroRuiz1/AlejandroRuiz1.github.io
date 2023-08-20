import "./css/Projects.css";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="article-container" id="projects">
      <h1>Projects</h1>
      {Object.keys(projects).map((project, index) => (
        <article id={projects[project].name}>
          <h2>{projects[project].name}</h2>
          <p id="description">{projects[project].description}</p>
          <div className="responsibilities">
            <h3>My responsibilities included:</h3>
            <ul>
              {projects[project].responsibilities.map((res) => {
                return <li className="responibility">{res}</li>;
              })}
            </ul>
          </div>
          <h3>Technologies used:</h3>
          <div className="technologies">
            {Object.keys(projects[project].technologies).map((technology) => {
              return (
                <p className="technology">
                  {projects[project].technologies[technology]}
                </p>
              );
            })}
          </div>
          {Object.keys(projects).length - 1 !== index ? (
            <span className="divisor"></span>
          ) : (
            <span></span>
          )}
          {console.log(Object.keys(projects).length, index)}
        </article>
      ))}
    </div>
  );
}
