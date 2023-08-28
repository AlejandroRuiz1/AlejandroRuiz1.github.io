import "./css/Footer.css";

const Content = ({ links }) => {
  return (
    <span id="footer">
      <p>&copy; Copyright &nbsp; {new Date().getFullYear()}</p>
      <p>&mdash;</p>
      <a href="/">Alejandro Ruiz</a>
      <p>&mdash;</p>
      <span>
        <a href={links.imgCredit} target="_blank" rel="noreferrer">
          Image by storyset
        </a>
        &nbsp; on Freepik
      </span>
    </span>
  );
};
export default function Footer({ links }) {
  return <Content links={links} />;
}
