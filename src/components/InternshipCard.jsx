
export default function InternshipCard({ experience, job }) {
  return (
    <article className="max-w-md shadow-md rounded-xl p-4 bg-slate-700 transition ease-in-out
    hover:-translate-y-1 hover:scale-105 duration-150 border-blue hover:border-2" id={experience[job].company} key={job.key}>
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
  )
}
