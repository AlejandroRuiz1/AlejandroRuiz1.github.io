import InternshipCard from "./InternshipCard";

const Experience = ({ experience }) => {
  return (
    <div id="internships" className="w-full py-10 md:py-20 flex flex-col">
      <div id="container" className="px-4 text-xl rounded-2xl max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <h1 className="text-4xl font-semibold w-full border-b-4 p-2 pt-6 border-b-blue">Internships</h1>
      </div >
      <div id="article-container" className="flex flex-wrap justify-center gap-6 px-6 py-16">
        {Object.keys(experience).map((job) => (
          <InternshipCard experience={experience} job={job} />
        ))}
      </div>
    </div>
  );
};

export default function Internships({ experience }) {
  return <Experience experience={experience} />;
}
