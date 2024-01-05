import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

import logo from '../assets/android-chrome-512x512.png';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="hidden md:flex justify-evenly bg-primary-700 py-6 md:py-12">
        <ScrollLink
          activeClass="active"
          to="landing"
          spy={true}
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          <div className="flex items-center justify-center md:justify-start pt-4 gap-2">
            <img alt="logo" src={logo} className="w-6 h-6 invert" />
            <p className="text-sm font-semibold text-primary-50">HelpMeOut</p>
          </div>
        </ScrollLink>

        <div className="flex flex-col justify-center text-[0.75rem] text-primary-50 gap-3">
          <h5 className=" font-semibold">Menu</h5>
          <ScrollLink
            activeClass="active"
            to="landing"
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-primary-100 cursor-pointer"
          >
            Home
          </ScrollLink>
          <Link to={'/'} className="hover:text-primary-100">
            Converter
          </Link>
          <ScrollLink
            activeClass="active"
            to="how-it-works"
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-primary-100 cursor-pointer"
          >
            How it Works
          </ScrollLink>
        </div>

        <div className="flex flex-col justify-center text-[0.75rem] text-primary-50 gap-3">
          <h5 className=" font-semibold">About us</h5>
          <Link to={'/'} className="hover:text-primary-100">
            About
          </Link>
          <Link to={'/'} className="hover:text-primary-100">
            Contact Us
          </Link>
          <Link to={'/'} className="hover:text-primary-100">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col justify-center text-[0.75rem] text-primary-50 gap-3">
          <h5 className=" font-semibold">Screen Record</h5>
          <Link to={'/'} className="hover:text-primary-100">
            Browser Window
          </Link>
          <Link to={'/'} className="hover:text-primary-100">
            Desktop
          </Link>
          <Link to={'/'} className="hover:text-primary-100">
            Application
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-evenly md:hidden bg-primary-700 py-6 md:py-12">
        <Link onClick={scrollToTop}>
          <div className="flex items-center justify-center mb-4 py-4 gap-2">
            <img alt="logo" src={logo} className="w-6 h-6 invert" />
            <p className="text-sm font-semibold text-primary-50">HelpMeOut</p>
          </div>
        </Link>

        <div className="flex w-full px-10 justify-between items-center">
          <div className="flex flex-col justify-center text-[0.75rem] text-primary-50 gap-3">
            <h5 className=" font-semibold">Menu</h5>
            <ScrollLink
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              duration={1000}
              className="hover:text-primary-100 cursor-pointer"
            >
              Home
            </ScrollLink>
            <Link to={'/'} className="hover:text-primary-100">
              Converter
            </Link>
            <ScrollLink
              activeClass="active"
              to="how-it-works"
              spy={true}
              smooth={true}
              duration={1000}
              className="hover:text-primary-100 cursor-pointer"
            >
              How it Works
            </ScrollLink>
          </div>

          <div className="flex flex-col justify-center text-[0.75rem] text-primary-50 gap-3">
            <h5 className=" font-semibold">About us</h5>
            <Link to={'/'} className="hover:text-primary-100">
              About
            </Link>
            <Link to={'/'} className="hover:text-primary-100">
              Contact Us
            </Link>
            <Link to={'/'} className="hover:text-primary-100">
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col justify-center text-[0.75rem] text-primary-50 gap-3">
            <h5 className=" font-semibold">Screen Record</h5>
            <Link to={'/'} className="hover:text-primary-100">
              Browser Window
            </Link>
            <Link to={'/'} className="hover:text-primary-100">
              Desktop
            </Link>
            <Link to={'/'} className="hover:text-primary-100">
              Application
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
