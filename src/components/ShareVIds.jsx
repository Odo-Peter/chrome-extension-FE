/**
 * Components - Share Videos
 *
 * Responsible for taking form email inputs, passed down as props to the <Home /> page components.
 *
 * Props: - OpenModal: If true, a simple modal that confirms email is been sent successfully {/ TODO: fix email /}
 * - handleEmailChange, email: checks for email and handles the sending in the home page
 */

import toast from 'react-hot-toast';
import copy from '../assets/copy.svg';
import { socials } from '../utils/dummyData';

const ShareVIds = ({
  openModalAndSendEmail,
  handleEmailChange,
  email,
  url,
}) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Url copied', {
        duration: 4000,
      });
    } catch (err) {
      console.error('Async: Could not copy text: ', err);
    }
  };

  return (
    <div className="flex flex-col pr-4">
      <div className="mb-14">
        <form
          className="relative w-full md:w-[80%] lg:w-[60%] flex flex-col gap-y-4 mb-6"
          onSubmit={openModalAndSendEmail}
        >
          <p className="text-[0.75rem] text-primary-200">
            Share videos seamlessly via email and socials.
          </p>
          <input
            type="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Enter email of receiver"
            className="border-0 outline-none bg-primary-50 text-[0.8rem] w-full rounded-md p-3 placeholder:text-[0.75rem] md:placeholder:text-[0.8rem] placeholder:text-primary-300 focus:placeholder:opacity-60"
          />
          <button
            className={
              email !== ''
                ? 'absolute bottom-2 right-2 bg-primary-400 text-primary-50 text-[0.75rem] px-6 md:px-8 py-1 rounded-md hover:bg-primary-600 transition-all cursor-pointer'
                : 'absolute bottom-2 right-2 bg-primary-400 text-primary-50 text-[0.75rem] px-8 py-1 rounded-md cursor-not-allowed'
            }
            type="submit"
            disabled={!email}
          >
            Send
          </button>
        </form>

        {/* Mobile devices */}
        <div className="clipboard relative bg-primary-50 border border-primary-100 bg-opacity-40 text-[0.7rem] md:hidden w-full rounded-md p-3">
          {`${url.substring(0, 34)}...`}

          <button
            onClick={copyToClipboard}
            className="flex outline-none gap-[5px] absolute right-2 top-[50%] -translate-y-1/2  text-primary-900 text-[0.75rem] px-3 border border-primary-800 py-1 rounded-md hover:bg-primary-100 transition-all cursor-pointer"
          >
            <img alt="copy" src={copy} className="h-4 w-4" />
          </button>
        </div>

        {/* Tablet and larger devices */}
        <div className="clipboard hidden relative bg-primary-50 border border-primary-100 bg-opacity-40 text-[0.8rem] md:block w-full md:w-[80%] lg:w-[60%] rounded-md p-3">
          {url}

          <button
            onClick={copyToClipboard}
            className="flex outline-none gap-[5px] absolute right-2 top-[50%] -translate-y-1/2  text-primary-900 text-[0.75rem] px-3 border border-primary-800 py-1 rounded-md hover:bg-primary-100 transition-all cursor-pointer"
          >
            <img alt="copy" src={copy} className="h-4 w-4" />
            <p>Copy URL</p>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-[0.7rem] font-semibold pb-2">Share your video</h4>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {socials.map((social) => (
            <div
              className="flex items-center justify-center gap-1 border border-primary-700 py-[5px] px-4 rounded-lg  hover:bg-primary-50 cursor-pointer w-full"
              key={social.title}
            >
              <img
                alt={social.title}
                src={social.icon}
                className="w-5 h-5 mr-2"
              />
              <p className="text-[0.65rem] text-primary-900 font-medium">
                {social.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareVIds;
