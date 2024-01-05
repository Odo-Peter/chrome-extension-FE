import { Link } from 'react-router-dom';

import unpack from '../assets/getStarted/g3.jpg';

const Unpack = () => {
  return (
    <div className="flex flex-col gap-y-6 py-5 border-y border-primary-50">
      <div className="flex items-center ">
        <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
          2
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 h-fit">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex gap-x-3 items-center">
            <p className="font-semibold text-primary-800 py-3 px-4 w-full bg-primary-700/10 rounded-lg border-r-4 border-primary-500">
              Unpack the extension
            </p>
          </div>
          <p className="text-sm pl-4 font-medium text-primary-400">
            This part shows how to locally unpack and set up the chrome
            extension on your browser.
          </p>
          <ul className="text-[0.85rem] font-normal marker:text-primary-500 text-primary-300 list-disc list-outside ml-10 space-y-2 pr-4">
            <li>
              Navigate to the top-right corner of the browser and click on the{' '}
              <span className="text-primary-500 font-bold">extensions</span>{' '}
              icon, this will display a dropdown
            </li>
            <li>
              As shown in the image, click on{' '}
              <span className="text-primary-500 font-bold">
                Manage extensions
              </span>
              , this will navigate you to the chrome extensions settings. You
              can read more about chrome extensions{' '}
              <Link
                to={'/'}
                className="text-primary-500 underline font-medium hover:text-primary-600"
              >
                here.
              </Link>
            </li>
            <li>
              At the top of the extensions settings page, click on the{' '}
              <span className="text-primary-500 font-bold">Load unpacked</span>{' '}
              button . This will open a file explorer window, select the{' '}
              <span className="text-primary-500 font-bold">
                extension-proper
              </span>{' '}
              folder , this folder is where the extracted files from the Google
              drive resides.
            </li>
          </ul>
        </div>
        <div className="relative flex md:justify-end w-full">
          <img
            src={unpack}
            alt="unpack"
            className="w-[90%] shadow-2xl border border-primary-50 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Unpack;
