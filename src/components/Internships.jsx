
const Experience = ({ experience }) => {
  return (
    <div id="internships" className="w-full xl:h-screen pt-20 sm:py-20 flex">
      <div className="h-fit justify-center items-center text-xl mx-auto bg-slate-400 bg-opacity-10 rounded-2xl sm:w-fit">
        <h1 className="text-4xl font-semibold w-fit mx-auto border-b-4 p-2 pt-6 border-b-blue">Internships</h1>
        <div id="article-container" className="grid grid-cols-none lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 p-4 sm:p-8 justify-center mt-5 sm:mt-2">
          {Object.keys(experience).map((job) => (
            <article className="max-w-md shadow-md transition-transform rounded-xl p-4 bg-slate-100 dark:bg-slate-700" id={experience[job].company} key={job.key}>
              <h2 className="text-3xl font-semibold pb-4 text-center border-b-2 border-b-blue mb-4">{experience[job].company}</h2>
              <div className="text-base">
                <div className="leading-none">
                  <p className="mx-0 my-1 text-xl">{experience[job].role}</p>
                  <p className="mx-0 my-1 text-xl">{experience[job].timeFrame}</p>
                  <p className="mx-0 my-1 text-xl">{experience[job].location}</p>
                </div>
                <div id="responsibilities" className="mx-0 p-4">
                  <h3 className="mx-0 my-2 text-xl text-center">My responsibilities included:</h3>
                  <ul className="text-justify list-disc">
                    {experience[job].responsibilities.map((res) => {
                      return (
                        <li className="marker:text-blue px-0 ml-4 py-1" key={res.id}>
                          {res.desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <h3 className="mx-0 my-2 text-xl text-center">Technologies used:</h3>
                <div id="technologies" className="flex flex-wrap justify-around items-center mx-0 my-2.5">
                  {Object.keys(experience[job].technologies).map((technology) => {
                    return (
                      <p className="bg-lightBlue bg-opacity-50 text-center flex-[1_0_30%] m-1 p-1 rounded-xl border-2 border-solid border-blue shadow-md" key={technology.id}>
                        {experience[job].technologies[technology].desc}
                      </p>
                    );
                  })}
                </div>
              </div>
            </article>
          ))
          }
        </div>
      </div >
    </div>
  );
};

export default function Internships({ experience }) {
  return <Experience experience={experience} />;
}
