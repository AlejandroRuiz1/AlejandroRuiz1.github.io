
const Content = ({ projects }) => {
  return (
    <div id="work-experience" className="md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-4/6 p-6 flex flex-col text-xl mx-auto bg-slate-500 bg-opacity-10 rounded-2xl mb-14">
      <h1 className="text-3xl font-bold">Projects</h1>
      {Object.keys(projects).map((project) => (
        <article className="shadow transition-transform rounded-xl p-4 mt-8 bg-slate-200 dark:bg-slate-700" id={projects[project].name} key={project.key}>
          <h2 className="text-3xl font-semibold pb-4 text-center border-b-2 border-b-blue mb-4">{projects[project].name}</h2>
          <div className="text-base ml-8">
            <div className="mx-0 my-6">
              <h3 className="mx-0 my-2 text-xl">My responsibilities included:</h3>
              <ul className="text-justify list-disc">
                {projects[project].responsibilities.map((res) => {
                  return (
                    <li className="marker:text-blue" key={res.id}>
                      {res.desc}
                    </li>
                  );
                })}
              </ul>
            </div>
            <h3 className="mx-0 my-2 text-xl">Technologies used:</h3>
            <div className="flex flex-wrap flex-row justify-around mx-0 my-2.5 -ml-8">
              {Object.keys(projects[project].technologies).map((technology) => {
                return (
                  <p className="bg-[rgba(0,0,0,35%)] text-center flex-[1_0_30%] m-1 p-1 rounded-xl border-2 border-solid" key={technology.id}>
                    {projects[project].technologies[technology].desc}
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

export default function Projects({ projects }) {
  return <Content projects={projects} />;
}

