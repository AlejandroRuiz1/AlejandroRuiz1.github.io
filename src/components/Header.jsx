import Contact from "./Contact.jsx";

export default function Header({ img, about, links }) {
  return (
    <div className="flex md:h-screen mt-20 pb-20 md:w-[80vw] mx-auto">
      <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 flex-wrap items-center">
        <div className="w-full pt-12 px-6 lg:py-16 lg:px-8">
          <div id="text" className="flex flex-col w-full lg:mx-auto">
            <h2 className="text-3xl font-extrabold sm:text-4xl mx-auto">
              {"Hi, my name is "}
              <span className="text-5xl font-bold text-blue mt-2 mb-4 sm:whitespace-nowrap">
                {about.firstName + " " + about.lastName}
              </span>
            </h2>
            {about.intro.map((i) => {
              return (
                <p className="text-xl mt-4" key={i.id}>
                  {i.desc}
                </p>
              );
            })}
          </div>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <Contact links={links} />
          </div>
        </div>
        {/* <div className="p-4"> */}
        <picture className="w-full max-w-lg mx-auto p-4 flex">
          <source
            srcSet={img} />
          <img
            src={img}
            alt="Illustration of a developer coding on a laptop."
          />
        </picture>
        {/* </div> */}
      </div>
    </div>
  );
}
