import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-8 my-28 flex justify-between px-6">
      <div className="flex flex-col">
        <span>&copy; 2023 Hussein Hashi</span>
        <span className="pl-2">Full-stack developer</span>
      </div>
      <div>
        <ul className="flex space-x-8">
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
