import resume from "../static/AlejandroRuiz_Resume2023.pdf";
import emailIcon from "../static/email-icon.png";
import linkedinIcon from "../static/linkedin-icon.png";
import githubLight from "../static/github-light.png";
import githubDark from "../static/github-dark.png";
import resumeIconLight from "../static/resume-icon-light.png";
import resumeIconDark from "../static/resume-icon-dark.png";

const links = [
  {
    name: "Email",
    href: "mailto:alejandro@aruiz.dev",
    alt: "Email Icon",
    src: { light: emailIcon, dark: emailIcon },
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/alejandroruiz1/",
    alt: "LinkedIn Icon",
    src: { light: linkedinIcon, dark: linkedinIcon },
  },
  {
    name: "GitHub",
    href: "https://github.com/AlejandroRuiz1",
    alt: "GitHub Icon",
    src: { light: githubLight, dark: githubDark },
  },
  {
    name: "Resume",
    href: resume,
    alt: "Resume Icon",
    src: { light: resumeIconLight, dark: resumeIconDark },
    download: "AlejandroRuiz_Resume.pdf",
  },
];

export default links;
