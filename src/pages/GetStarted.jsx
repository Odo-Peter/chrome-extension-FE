import { Link } from 'react-router-dom';

import PinAndStart from '../components/PinAndStart';
import SettingUp from '../components/SettingUp';
import StartRecord from '../components/StartRecord';
import Unpack from '../components/Unpack';

import arrow from '../assets/arrow-right.svg';

const GetStarted = () => {
  return (
    <section className="flex flex-col py-16 px-10 lg:px-24 gap-y-16">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-2xl md:text-4xl font-extrabold text-primary-800">
          Get started with HelpMeOut
        </h1>
        <p className="text-sm text-primary-200 text-center w-[60%]">
          <span className="font-bold text-primary-500">HelpMeOut</span> is an
          easy to use screen recording and video sharing browser extension, with
          a cloud based storage.
        </p>
        <h3 className="text-xl font-bold text-primary-700 mt-6">
          Welcome, Let's get you started...
        </h3>
      </div>

      <div className="flex flex-col gap-y-14 ">
        <SettingUp />
        <Unpack />
        <PinAndStart />
        <StartRecord />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-4 mt-10">
        <h4 className="text-2xl font-bold text-primary-700 text-center">
          Now that you are all caught up... <br />
          start using HelpMeOut
        </h4>
        <p className="text-sm text-center text-primary-200">
          We genreate a shareable link for your video. Simply send it to your
          audience via email or copy the link to send via any platform. <br />{' '}
          Recipients can access your video effortlessly through the provided
          link, with user-friendly interface suitable for anyone and everyone.
        </p>
        <Link
          to={'/auth/sign_in'}
          className="py-3 w-[60%] flex gap-x-4 items-center justify-center bg-primary-700 text-primary-50 text-sm font-semibold hover:bg-primary-600 mt-8 rounded-full"
        >
          Start a Free Trial Today{' '}
          <img
            src={arrow}
            alt="arrow-right"
            className="w-4 h-4 fill-primary-50"
          />{' '}
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
