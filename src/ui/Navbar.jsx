import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function onToggleMenu() {
    setHamburger(!hamburger);
    // document.body.style.overflow = hamburger ? "auto" : "hidden";
  }

  return (
    <nav>
      <div className="mt-0 hidden items-center justify-between px-4 py-4 md:flex">
        <img src="./logo1.png" className="w-42 h-16 p-1" />
        <ul className="mr-16 hidden items-center space-x-12 px-12 text-xl font-bold md:flex">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <a>
            <img src="./logo1.png" alt="" className="w-42 h-16 p-1" />
          </a>
          <button onClick={onToggleMenu} className="px-4">
            {!hamburger && <CiMenuFries />}
          </button>
        </div>
        {hamburger && (
          <div className="fixed inset-0 z-50 flex h-full w-full justify-center bg-white p-4 ">
            <button onClick={onToggleMenu} className="absolute right-3 top-3">
              <TfiClose />
            </button>{" "}
            <ul className="mt-4 flex flex-col items-center space-y-8 pt-10 text-xl font-semibold text-slate-600">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Work</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <br />
    </nav>
  );
}

export default Navbar;
