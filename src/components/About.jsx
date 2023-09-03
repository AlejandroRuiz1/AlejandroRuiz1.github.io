import "./css/About.css";

// Tentatively will include info about hobbies
const AboutMe = ({ about }) => {
  return (
    <div id="about">
      <h1>About Me</h1>
      {about.intro.map((i) => {
        return (
          <p key={i.id} className="statement">
            {i.desc}
          </p>
        );
      })}
    </div>
  );
};

export default function About({ about }) {
  return <AboutMe about={about} />;
}
