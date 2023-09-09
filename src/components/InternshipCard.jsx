
export default function InternshipCard({ experience, job }) {
  let internship = experience[job];
  return (
    <article className={`max-w-md shadow-md rounded-xl p-4 bg-slate-700 transition ease-in-out
    hover:-translate-y-1 hover:scale-105 duration-150 hover:shadow-lg ${internship.shadow}`} id={internship.company} key={job.key}>
      <div className="text-base">
        <a href={internship.img.href} >
          <img className="h-20 mx-auto" alt={internship.img.alt} src={internship.img.src} />
        </a>
        <hr className="my-4" />
        <div className="leading-none">
          <h2 className="mx-0 my-1 text-2xl font-semibold">{internship.company}</h2>
          <p className="mx-0 my-1 text-xl">{internship.role}</p>
          <p className="mx-0 my-1 text-xl">{internship.timeFrame}</p>
          <p className="mx-0 my-1 text-xl">{internship.location}</p>
        </div>
        <div id="responsibilities" className="mx-0 p-4">
          <h3 className="mx-0 my-2 text-xl text-center">My responsibilities included:</h3>
          <ul className="text-justify list-disc">
            {internship.responsibilities.map((res) => {
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
          {Object.keys(internship.technologies).map((technology) => {
            return (
              <p className="bg-lightBlue bg-opacity-50 text-center flex-[1_0_30%] m-1 p-1 rounded-xl border-2 border-solid border-blue shadow-md" key={technology.id}>
                {internship.technologies[technology].desc}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  )
}
