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
            <Link>Behance</Link>
          </li>
          <li>
            <Link>Dribble</Link>
          </li>
          <li>
            <Link>LinkedIn</Link>
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
