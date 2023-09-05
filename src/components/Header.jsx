import Contact from "./Contact.jsx";

export default function Header({ img, about, links }) {
  return (
    <div className="mx-auto md:flex md:items-center md:h-screen md:w-[80vw] lg:mt-0 mt-24 md:mt-40">
      <div className="flex flex-col w-full pt-12 px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col w-full lg:w-3/4 lg:mx-auto justify-start">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
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
      <div className="flex p-4">
        <picture className="w-64 mx-auto xs:w-full sm:w-[500px] md:w-96 lg:w-[500px] sm:mx-auto">
          <source
            srcSet={img} />
          <img
            src={img}
            alt="Illustration of a developer coding on a laptop."
          />
        </picture>
      </div>
    </div>
  );
}
