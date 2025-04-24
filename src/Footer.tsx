
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  FileArrowDown,
} from "phosphor-react";

import resume from "./assets/resume.pdf"
export function Footer() {
  return (
    <footer className="w-full border-t p-4 bg-gray-50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="text-sm text-gray-600">© 2025 Dikshant Jain</div>
      <div className="flex space-x-6 text-gray-600">
        <a
          href={resume}
          download
          className="hover:text-blue-600 transition-colors"
          title="Download Resume"
        >
          <FileArrowDown size={24} />
        </a>
        <a
          href="https://github.com/dikshantjain"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
          title="GitHub"
        >
          <GithubLogo size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/dikshant-jain-bb4142173/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
          title="LinkedIn"
        >
          <LinkedinLogo size={24} />
        </a>
        <a
          href="mailto:dikshantjain1997@gmail.com"
          className="hover:text-blue-600 transition-colors"
          title="Email Me"
        >
          <EnvelopeSimple size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
