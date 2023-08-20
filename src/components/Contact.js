import "./css/Contact.css";
import contact from "../data/contact";

export default function Contact() {
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <p className="email">
        Email: <a href="mailto:alejandro@aruiz.dev">{contact.email}</a>
      </p>
      <p className="linkedin">
        <a href={contact.linkedin}>LinkedIn</a>
      </p>
      <p className="github">
        <a href={contact.github}>GitHub</a>
      </p>
    </div>
  );
}
