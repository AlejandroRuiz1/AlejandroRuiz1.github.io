import "./css/Contact.css";

export default function Contact(props) {
  return (
    <div id="contact">
      {props.links.map((l) => {
        return (
          <a className={l.name} href={l.href}>
            <img alt={l.alt} src={l.src} />
            {console.log(l.src)}
          </a>
        );
      })}
    </div>
  );
}
