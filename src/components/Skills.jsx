
export default function Skills(props) {
  return (
    <div id="skills" className="py-10 md:py-20">
      <div id="container" className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-4xl p-2 font-bold border-b-4 border-blue w-full">Skills</h1>
        </div>
      </div>
      <div id="grid" className="max-w-4xl mx-auto px-4 py-16 grid max-[240px]:grid-cols-1 grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {props.logos.map((l) => {
          return (
            <div className={`rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md hover:shadow-lg ${l.shadow}`}>
              <img className="h-20 mx-auto my-auto pt-4" alt={l.alt} src={l.src} />
              <p className="py-2">{l.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
