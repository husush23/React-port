import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function onToggleMenu() {
    setHamburger(!hamburger);
  }

  return (
    <nav>
      <div className="mt-0 hidden items-center justify-between px-4 py-4 sm:flex">
        <img src="./logo1.png" className="w-42 h-16 p-1" />
        <ul className="mr-16 hidden items-center space-x-12 px-12 text-xl font-bold sm:flex">
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
      <div className="sm:hidden">
        <div className="flex items-center justify-between">
          <a>
            <img src="./logo1.png" alt="" className="w-42 h-16 p-1" />
          </a>
          <button onClick={onToggleMenu} className="px-4">
            {!hamburger ? <CiMenuFries /> : <TfiClose />}
          </button>
        </div>
        {hamburger && (
          <>
            <div
              className="fixed inset-0 z-50 bg-black opacity-50"
              onClick={onToggleMenu}
            ></div>
            <ul className="fixed left-0 top-0 z-50 h-full w-64 bg-white p-4">
              {" "}
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
          </>
        )}
      </div>
      <br />
    </nav>
  );
}

export default Navbar;
