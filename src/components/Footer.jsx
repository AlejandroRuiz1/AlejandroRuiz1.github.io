let imgCredit = "https://www.freepik.com/free-vector/coding-concept-illustration_6572420.htm#query=programmer%20illustrated&position=0&from_view=search&track=ais"

const Content = ({ links }) => {
  return (
    <span id="footer" className="flex justify-evenly py-2 bg-slate-200 dark:bg-slate-700">
      <p>&copy; Copyright &nbsp; {new Date().getFullYear()}</p>
      <p className="text-blue">&mdash;</p>
      <a href="/">Alejandro Ruiz</a>
      <p className="text-blue">&mdash;</p>
      <span>
        <a href={imgCredit} target="_blank" rel="noreferrer">
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
