import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

import logo from '../assets/android-chrome-512x512.png';
import arrow from '../assets/arrow-right.svg';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex items-center justify-between sticky top-0 shadow-md z-10 px-6 md:px-10 lg:px-24 py-4 lg:py-6 w-full bg-[#fff]">
      <Link onClick={scrollToTop} className="flex items-center gap-2 ">
        <img alt="logo" src={logo} className="h-6 w-6" />
        <h1 className="font-semibold text-primary-800">HelpMeOut</h1>
      </Link>
      <div className="hidden md:flex items-center gap-x-6">
        <ScrollLink
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
          className="font-medium text-primary-900 text-sm hover:text-primary-400 cursor-pointer transition-all"
        >
          Features
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="how-it-works"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
          className="font-medium text-primary-900 text-sm hover:text-primary-400 cursor-pointer transition-all"
        >
          How it Works
        </ScrollLink>
      </div>

      <div className="flex items-center">
        <Link
          to={'/get_started'}
          className="py-[10px] px-6 border-none outline-none bg-primary-800 text-primary-50 flex items-center rounded-full text-xs md:text-sm font-semibold justify-center gap-2 hover:bg-primary-500 hover:shadow-md"
        >
          <p className=""> Get Started</p>
          <img alt="arrow" src={arrow} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
