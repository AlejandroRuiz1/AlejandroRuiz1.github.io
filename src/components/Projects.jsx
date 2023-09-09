import ProjectCard from "./ProjectCard.jsx";

const Content = ({ projects }) => {
  return (
    <div id="projects" className="w-full py-10 md:py-20 flex flex-col">
      <div className="px-4 text-xl rounded-2xl max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <h1 className="text-4xl font-semibold p-2 pt-6 border-b-4 border-b-blue w-full">Projects</h1>
      </div>
      <div id="article-container" className="mx-auto grid grid-cols-none lg:grid-cols-2 gap-8 sm:gap-10 px-4 py-16">
        {Object.keys(projects).map((project) => (
          <ProjectCard projects={projects} project={project} />
        ))}
      </div>
    </div>
  );
};

export default function Projects({ projects }) {
  return <Content projects={projects} />;
}

