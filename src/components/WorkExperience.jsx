
const Experience = ({ experience }) => {
  return (
    <div id="work-experience" className="p-6 flex flex-col text-xl mx-auto bg-slate-400 bg-opacity-10 rounded-2xl mb-14">
      <h1 className="text-3xl font-bold">Work Experience</h1>
      {Object.keys(experience).map((job) => (
        <article className="shadow transition-transform rounded-xl p-4 mt-8 bg-slate-100 dark:bg-slate-700" id={experience[job].company} key={job.key}>
          <h2 className="text-3xl font-semibold pb-4 text-center border-b-2 border-b-blue mb-4">{experience[job].company}</h2>
          <div className="text-base ml-8">
            <div className="leading-none">
              <p className="mx-0 my-1 text-xl">{experience[job].role}</p>
              <p className="mx-0 my-1 text-xl">{experience[job].timeFrame}</p>
              <p className="mx-0 my-1 text-xl">{experience[job].location}</p>
            </div>
            <div className="mx-0 my-6">
              <h3 className="mx-0 my-2 text-xl">My responsibilities included:</h3>
              <ul className="text-justify list-disc">
                {experience[job].responsibilities.map((res) => {
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
              {Object.keys(experience[job].technologies).map((technology) => {
                return (
                  <p className="bg-[rgba(0,0,0,35%)] text-center flex-[1_0_30%] m-1 p-1 rounded-xl border-2 border-solid" key={technology.id}>
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
