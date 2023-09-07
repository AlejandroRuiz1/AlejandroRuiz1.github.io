let imgCredit = "https://www.freepik.com/free-vector/coding-concept-illustration_6572420.htm#query=programmer%20illustrated&position=0&from_view=search&track=ais"

const Content = () => {
  return (
    <div id="footer" className="absolute bottom-0 w-full h-10 flex justify-center p-2 bg-slate-200 dark:bg-slate-700 text-center text-xs items-center flex-shrink">
      <p>&copy; Copyright &nbsp; {new Date().getFullYear()}</p>
      <p className="text-blue px-3">&mdash;</p>
      <a href="/">Alejandro Ruiz</a>
      <p className="text-blue px-3">&mdash;</p>
      <span>
        <a href={imgCredit} target="_blank" rel="noreferrer">
          Image by storyset
        </a>
        &nbsp; on Freepik
      </span>
    </div>
  );
};
export default function Footer({ links }) {
  return <Content links={links} />;
}
