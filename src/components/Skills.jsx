
export default function Skills({ logos }) {
  return (
    <div id="skills" className="py-10 md:py-20">
      <div id="container" className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-4xl md:text-5xl p-2 font-bold border-b-4 border-blue w-full">Skills</h1>
        </div>
      </div>
      <div id="grid" className="max-w-4xl mx-auto px-4 py-16 grid max-[240px]:grid-cols-1 grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-orange-500 shadow-md hover:shadow-lg hover:shadow-orange-500">
          <img className="h-20 mx-auto my-auto pt-4" alt="HTML Icon" src={logos.html.html_logo} />
          <p className="py-2">HTML</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-sky-500 hover:shadow-lg hover:shadow-sky-500">
          <img className="h-20 mx-auto my-auto pt-4" alt="CSS Icon" src={logos.css.css_logo} />
          <p className="py-2">CSS</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-yellow-300 hover:shadow-lg hover:shadow-yellow-300">
          <img className="h-20 mx-auto my-auto pt-4" alt="Javascript Icon" src={logos.javascript.javascript_logo} />
          <p className="py-2">Javascript</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-sky-400 hover:shadow-lg hover:shadow-sky-400">
          <img className="h-20 mx-auto my-auto pt-4" alt="React Icon" src={logos.react.react_logo} />
          <p className="py-2">React</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-sky-400 hover:shadow-lg hover:shadow-sky-400">
          <img className="h-20 mx-auto my-auto pt-4" alt="TailwindCSS Icon" src={logos.tailwind.tailwind_logo} />
          <p className="py-2">TailwindCSS</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400">
          <img className="h-20 mx-auto my-auto pt-4" alt="Python Icon" src={logos.python.python_logo} />
          <p className="py-2">Python</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-sky-500 hover:shadow-lg hover:shadow-sky-500">
          <img className="h-20 mx-auto my-auto pt-4" alt="SQL Icon" src={logos.sql.sql_logo} />
          <p className="py-2">SQL</p>
        </div>
        <div className="rounded-xl bg-blue bg-opacity-20 hover:scale-110 duration-300 shadow-md shadow-violet-700 hover:shadow-lg hover:shadow-violet-700">
          <img className="h-20 mx-auto my-auto pt-4" alt="C# Icon" src={logos.csharp.csharp_logo} />
          <p className="py-2">C#</p>
        </div>
      </div>
    </div>
  )
}
