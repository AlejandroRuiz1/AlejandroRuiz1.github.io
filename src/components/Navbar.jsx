import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";


const Nav = ({ logo }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="fixed w-full flex justify-between items-center px-4 h-20 mb-20 bg-slate-200 dark:bg-slate-700 shadow-md">

      {/* Logo */}
      <a href="/">
        <img src={logo} width={220} className="select-none hover:scale-105 cursor-pointer" alt="ARuiz.dev logo" />
      </a>


      {/* Navbar links */}
      <ul className="hidden md:flex">
        <li className="hover:text-blue block font-semibold select-none hover:scale-125">
          <a href="/">
            Home
          </a>
        </li>
        {/* <li className="hover:text-blue font-semibold select-none hover:scale-125">
          <a href="/">
            About
          </a>
        </li> */}
        <li className="hover:text-blue font-semibold select-none hover:scale-125">
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className="hover:text-blue font-semibold select-none hover:scale-125">
          <a href="/">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-20 cursor-pointer">
        {!isNavOpen
          ? <FaBars className="h-8 w-8 text-blue" onClick={toggleNav} />
          : <FaXmark className="h-10 w-8 text-blue" onClick={toggleNav} />
        }
      </div>


      {/* Modal */}
      <ul className={`${!isNavOpen ? "translate-x-full z-10" : "translate-x-0"} ease-in-out duration-500 absolute top-0 left-0 w-full h-screen bg-slate-200 dark:bg-slate-700 flex flex-col justify-center items-center md:hidden`}>
        <li className="py-6 text-3xl block hover:text-blue font-semibold select-none hover:scale-125 focus:scale-125" href="/">
          <a href="/" onClick={toggleNav}>
            Home
          </a>
        </li>
        <li className="py-6 text-3xl block hover:text-blue font-semibold select-none hover:scale-125" href="/">
          <a href="/" onClick={toggleNav}>
            About
          </a>
        </li>
        <li className="py-6 text-3xl block hover:text-blue font-semibold select-none hover:scale-125" href="#projects">
          <a href="#projects" onClick={toggleNav}>
            Projects
          </a>
        </li>
        <li className="py-6 text-3xl block hover:text-blue font-semibold select-none hover:scale-125" href="/">
          <a href="/" onClick={toggleNav}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default function NavBar({ logo }) {
  return <Nav logo={logo} />;
}
