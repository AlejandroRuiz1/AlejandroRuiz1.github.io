
export default function Contact(props) {
  return (
    <div id="contact" className="flex flex-wrap mx-auto justify-center w-fit gap-4 pt-8">
      {props.links.map((l) => {
        const downloadable = l.download;
        return (
          <a id={l.name} href={l.href} download={downloadable ? l.download : undefined}
            className="group rounded-full flex flex-col flex-auto justify-center items-center">
            <div className="flex justify-center items-center transition ease-in-out
             hover:-translate-y-1 hover:scale-125 hover:blur-0 duration-150 bg-slate-700
              dark:bg-slate-200 h-16 w-16 rounded-full p-2 shadow-md shadow-slate-400 dark:shadow-slate-950">
              <picture className="h-12 w-12" title={l.name}>
                <source
                  srcSet={l["src"].dark}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src={l["src"].light}
                  alt={l.alt}
                />
              </picture>
            </div>
            <p className="mx-auto text-sm md:text-base pt-2 invisible group-hover:visible">{l.name}</p>
          </a>
        )
      })}
    </div>
  );
}
