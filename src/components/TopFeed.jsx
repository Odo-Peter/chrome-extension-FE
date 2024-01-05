/**
 * Components - TopFeed
 *
 * Responsible for mocking some sort of a reusable nav page, using the recieved props to customize the outlook on differnt pages.
 *
 * Props: - message : if true, renders a customized text
 * - isFeed : if true, renders a search bar that aid users to search for specific videos via the search params
 * - boldText : customizes the file_details page, to render links and navigation to some pages.
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DropDown from './DropDown';

import logo from '../assets/android-chrome-512x512.png';
import avatar from '../assets/icons8.png';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

const TopFeed = ({ message, isFeed, boldText }) => {
  const [user, setUser] = useState('');
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('currentUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
    }
  }, []);

  const handleDropDownModal = () => {
    console.log('Clicked lyka biyaatchhhh!!!');
    setDropDown(!dropDown);
  };

  return (
    <>
      <div
        className={
          !boldText
            ? 'flex flex-col gap-6 md:gap-12 fixed top-0 left-0 shadow-md z-10 px-6 lg:px-20 py-4 lg:pt-6 lg:pb-4 w-full bg-[white]'
            : 'flex flex-col gap-8 fixed top-0 left-0 shadow-md z-10 px-6 lg:px-20 py-4 lg:pt-6 lg:pb-4 w-full bg-[white]'
        }
      >
        <nav className="flex justify-between items-center">
          <Link to="" className="flex gap-2 items-center">
            <img alt="logo" src={logo} className="w-8 h-8" />
            <h1 className="text-primary-800 font-semibold text-base">
              HelpMeOut
            </h1>
          </Link>
          <div className="flex gap-2 items-center relative">
            <img src={avatar} alt="avatar" className="w-10 h-10" />
            <p className="text-sm text-primary-900">Odo Peter</p>
            <RiArrowDropDownLine
              className="cursor-pointer w-8 h-8 -ml-2 opacity-80 hover:opacity-100 rounded-full "
              onClick={handleDropDownModal}
            />
            {dropDown && (
              <div className="absolute top-full z-20 right-2">
                {' '}
                <DropDown />{' '}
              </div>
            )}
          </div>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 justify-start">
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-primary-900">
              Hello, Odo Peter
            </h3>

            <p className="text-[0.7rem] text-primary-400 pb-4">{user?.email}</p>

            {boldText ? (
              <p className={'text-[0.8rem] text-primary-200'}>
                <Link
                  to={'/video_uploads'}
                  className="hover:text-primary-300 underline"
                >
                  Home{' '}
                </Link>{' '}
                /{' '}
                <Link to={'/feed'} className="hover:text-primary-300 underline">
                  Recent Videos
                </Link>{' '}
                /{' '}
                <span className="text-primary-500 font-semibold capitalize">
                  {boldText}
                </span>
              </p>
            ) : (
              <p className={'text-[0.75rem] text-primary-200'}>{message}</p>
            )}
          </div>
          {isFeed ? (
            <form className="md:w-[35%] relative">
              <input
                type="text"
                placeholder="Search for a particular video"
                className="px-4 py-3 rounded-lg bg-primary-50 text-[0.8rem] w-full border-none outline-none"
              />
              <BiSearch className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100" />
            </form>
          ) : (
            ''
          )}
        </div>
      </div>
      {/* <div className="border-b border-primary-50 w-full" /> */}
    </>
  );
};

export default TopFeed;
