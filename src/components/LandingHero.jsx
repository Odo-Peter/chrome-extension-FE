import { Link } from 'react-router-dom';

import arrow from '../assets/arrow-right.svg';
import hero from '../assets/hero.png';

const LandingHero = () => {
  return (
    <div className="px-10 lg:px-24 py-6 lg:py-10">
      <div className="flex flex-col md:grid md:grid-cols-2 md:b-20">
        <div className="flex flex-col mt-10 md:mt-24 gap-6 md:gap-8">
          <h1 className="text-4xl md:text-5xl text-center md:text-left text-primary-900 font-extrabold">
            <span className="block">Show Them</span>{' '}
            <span className="block">Don't Just Tell</span>
          </h1>
          <p className="text-[0.8rem] text-primary-900 md:w-[95%] lg:w-[72%] text-center md:text-left">
            Help your friends and loved ones by creating and sending vidoes on
            how to get things done on a website
          </p>
          <Link
            to={
              'https://drive.google.com/drive/folders/1-o1iNrVKn76VnVKmckm4ciEPUzj-u5GY?usp=drive_link'
            }
            target="_blank"
            className="py-[0.8rem] md:py-[0.85rem] border-none outline-none bg-primary-800 text-primary-50 flex items-center rounded-lg justify-center gap-4 w-full md:w-1/2 hover:bg-primary-700 hover:shadow-md mx-auto md:mx-0 mb-10"
            id="get-started"
          >
            <p className="text-sm">Install HelpMeOut</p>
            <img alt="arrow" src={arrow} />
          </Link>
        </div>
        <div className="flex h-[80vh] w-full items-center md:gap-4 lg:gap-2">
          <div className="hidden md:flex items-center h-[500px] w-[494px] justify-center">
            <img
              src={hero}
              alt="hero-image3"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
