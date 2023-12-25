import {useState} from 'react';
import {CiMenuFries} from 'react-icons/ci';
import {TfiClose} from 'react-icons/tfi';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  function onToggleMenu() {
    setHamburger(!hamburger);
  }

  return (
    <nav>
      <div className='hidden sm:flex items-center mt-0 justify-between px-4 py-4'>
        <img src='./logo1.png' className='w-42 p-1 h-16' />
        <ul className='hidden sm:flex items-center space-x-12 px-12 font-bold text-xl mr-16'>
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
      <div className='sm:hidden'>
        <div className='flex items-center justify-between'>
          <a>
            <img src='./logo1.png' alt='' className='w-42 p-1 h-16' />
          </a>
          <button onClick={onToggleMenu} className='px-4'>
            {!hamburger ? <CiMenuFries /> : <TfiClose />}
          </button>
        </div>
        {hamburger && (
          <>
            <div
              className='fixed inset-0 bg-black opacity-50 z-50'
              onClick={onToggleMenu}
            ></div>
            <ul className='fixed top-0 left-0 h-full w-64 bg-white z-50 p-4'>
              {' '}
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
