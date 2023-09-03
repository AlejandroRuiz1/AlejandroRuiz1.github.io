// import "./css/navbar.css";

import { useState } from "react";

// function Hamburger

const Nav = ({ logo }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-2 bg-slate-200">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ">
        <a className="w-48" href="/">
          <img alt="aruiz.dev logo" src={logo} />
        </a>
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue border-blue hover:text-blue hover:border-blue"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className={isNavOpen ? "w-full flex-grow md:flex md:items-center md:w-auto" : "hidden w-full flex-grow md:flex md:items-center md:w-auto"}>
        <div className="text-sm flex-col sm:flex-grow">
          <a href="#work-experience" className="block w-fit mx-auto mt-4 md:inline-block md:mt-0 text-purple hover:text-purple mr-4">
            Work
          </a>
          <a href="#projects" className="block w-fit mx-auto mt-4 md:inline-block md:mt-0 text-purple hover:text-white mr-4">
            Projects
          </a>
          <a href="#contact" className="block w-fit mx-auto mt-4 md:inline-block md:mt-0 text-purple hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>






    // <nav className="flex items-center justify-between flex-wrap bg-slate-400 p-6">
    //   <div className="flex items-center flex-shrink-0 text-white mr-6">
    //     <a className="w-48" href="/">
    //       <img alt="aruiz.dev logo" src={logo} />
    //     </a>
    //   </div>
    //   <span className="spacer"></span>
    //   <div className="link-container">
    //     <a className="nav-link" href="#work-experience">
    //       Work
    //     </a>
    //   </div>
    //   <div className="link-container">
    //     <a className="nav-link" href="#projects">
    //       Projects
    //     </a>
    //   </div>
    //   <div className="link-container">
    //     <a className="nav-link" href="#contact">
    //       Contact
    //     </a>
    //   </div>
    // </nav>
  );
};




export default function NavBar({ logo }) {
  return <Nav logo={logo} />;
}
