import resume from "../static/AlejandroRuiz_Resume2023.pdf";
import emailIcon from "../static/email-icon.png";
import linkedinIcon from "../static/linkedin-icon.png";
import githubDark from "../static/github-dark.png";
import resumeIconDark from "../static/resume-icon-dark.png";

const links = [
  {
    name: "Email",
    href: "mailto:alejandro@aruiz.dev",
    alt: "Email Icon",
    src: emailIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/alejandroruiz1/",
    alt: "LinkedIn Icon",
    src: linkedinIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/AlejandroRuiz1",
    alt: "GitHub Icon",
    src: githubDark,
  },
  {
    name: "Resume",
    href: resume,
    alt: "Resume Icon",
    src: resumeIconDark,
    download: "AlejandroRuiz_Resume.pdf",
  },
];

export default links;
