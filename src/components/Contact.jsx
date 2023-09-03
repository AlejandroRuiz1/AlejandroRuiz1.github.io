// import "./css/Contact.css";

export default function Contact(props) {
  return (
    <div id="contact" className="flex space-x-8 m">
      {props.links.map((l) => {
        return (
          <a id={l.name} href={l.href}>
            <img className="w-12" alt={l.alt} src={l.src} />
          </a>
        );
      })}
    </div>
  );
}
