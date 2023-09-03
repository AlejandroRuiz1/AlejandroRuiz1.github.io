import "./css/Projects.css";

const Content = ({ projects }) => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      {Object.keys(projects).map((project, index) => (
        <article className="card" id={projects[project].name}>
          <h2>{projects[project].name}</h2>
          <p id="description">{projects[project].description}</p>
          <div className="responsibilities">
            <h3>My responsibilities included:</h3>
            <ul>
              {projects[project].responsibilities.map((res) => {
                return (
                  <li key={res.id} className="responibility">
                    {res.desc}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="technologies">
            <h3>Technologies used:</h3>
            {Object.keys(projects[project].technologies).map((technology) => {
              return (
                <p className="technology" key={technology.id}>
                  {projects[project].technologies[technology].desc}
                </p>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
};

export default function Projects({ projects }) {
  return <Content projects={projects} />;
}
