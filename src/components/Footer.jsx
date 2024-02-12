import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-4 my-8 space-y-8 text-sm md:mx-8 md:my-28 md:flex md:justify-between md:px-6 md:text-base">
      <div className="flex flex-col">
        <span>&copy; 2023 Hussein Hashi</span>
        <span className="pl-2">Full-stack developer</span>
      </div>
      <div>
        <ul className="flex space-x-6 pl-2 pr-44 md:space-x-12">
          <li>
            <Link
              to="https://github.com/husush23"
              target="_blank"
              className="hover:text-purple-500"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/husseinkadare/"
              target="_blank"
              className="hover:text-purple-500"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/husseinkadare2"
              target="_blank"
              className="hover:text-purple-500"
            >
              Twitter(𝕏)
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
/*
md:mx-8 md:my-28 md:flex md:justify-between md:px-6
*/
