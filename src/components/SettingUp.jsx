import { Link } from 'react-router-dom';
import googleDrive from '../assets/getStarted/gs3.jpg';

const SettingUp = () => {
  return (
    <div className="flex flex-col gap-y-6 py-5 border-y border-primary-50">
      <div className="flex items-center ">
        <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
          1
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 h-fit">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex gap-x-3 items-center">
            <p className="font-semibold text-primary-800 py-3 px-4 w-full bg-primary-700/10 rounded-lg border-r-4 border-primary-500">
              Download the extension
            </p>
          </div>
          <p className="text-sm pl-4 font-medium text-primary-400">
            This quick guide shows how to download the required files needed to
            use the chrome extension on your local machine.
          </p>
          <ul className="text-[0.85rem] font-normal marker:text-primary-500 text-primary-300 list-disc list-outside ml-10 space-y-2 pr-4">
            <li>
              Go to the landing page and click on the{' '}
              <Link
                to={'/'}
                className="text-primary-500 underline font-medium hover:text-primary-600"
              >
                Install HelpMeOut
              </Link>{' '}
              button. This will open a new tab on your browser, a Google drive
              with the required files can now be seen.
            </li>
            <li>
              As shown in the image, click on download and wait for the zip file
              containing the extension files to download.
            </li>
            <li>
              Go to your file explorer, ( by default files are downloaded to the{' '}
              <span className="text-primary-500 font-bold">Downloads</span> path
              of your machine ). Unzip and extract the{' '}
              <span className="text-primary-500 font-bold">
                extension-proper
              </span>{' '}
              folder to a desired path.
            </li>
            <li>
              Or you can go to this Github repository and checkout the guide on
              how to clone the repo and have the extension files on your local
              machine. ( these are the same files on the Google drive ).
            </li>
          </ul>
        </div>
        <div className="flex md:justify-end  w-full">
          <img
            src={googleDrive}
            alt="google-drive"
            className="h-[90%] shadow-2xl border border-primary-50 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingUp;
