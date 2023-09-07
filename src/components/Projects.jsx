
const Content = ({ projects }) => {
  return (
    <div id="projects" className="w-full xl:h-screen py-20 flex">
      <div className="h-fit justify-center items-center text-xl mx-auto bg-slate-400 bg-opacity-10 rounded-2xl sm:w-fit text-center">
        <h1 className="text-4xl font-semibold p-2 pt-6 border-b-4 border-b-blue w-fit mx-auto">Projects</h1>
        <div id="article-container" className="grid grid-cols-none lg:grid-cols-2 gap-8 sm:gap-10 p-4 sm:p-8 justify-center mt-5 sm:mt-2">
          {Object.keys(projects).map((project) => (
            <article className="max-w-md shadow-md transition-transform rounded-xl p-4 bg-slate-100 dark:bg-slate-700" id={projects[project].name} key={project.key}>
              <h2 className="text-3xl font-semibold pb-4 text-center border-b-2 border-b-blue mb-4">{projects[project].name}</h2>
              <div className="text-base">
                <div id="responsibilities" className="mx-0 p-4">
                  <h3 className="mx-0 my-2 text-xl">My responsibilities included:</h3>
                  <ul className="text-justify list-disc">
                    {projects[project].responsibilities.map((res) => {
                      return (
                        <li className="marker:text-blue px-0 ml-4 py-1" key={res.id}>
                          {res.desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <h3 className="mx-0 my-2 text-xl">Technologies used:</h3>
                <div id="technologies" className="flex flex-wrap justify-around items-center mx-0 my-2.5">
                  {Object.keys(projects[project].technologies).map((technology) => {
                    return (
                      <p className="bg-lightBlue bg-opacity-50 text-center flex-[1_0_30%] m-1 p-1 rounded-xl border-2 border-solid border-blue shadow-md" key={technology.id}>
                        {projects[project].technologies[technology].desc}
                      </p>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects({ projects }) {
  return <Content projects={projects} />;
}

