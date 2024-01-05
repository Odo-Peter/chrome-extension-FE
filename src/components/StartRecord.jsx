import unpack from '../assets/getStarted/g13.jpg';

const StartRecord = () => {
  return (
    <div className="flex flex-col gap-y-6 py-5 border-y border-primary-50">
      <div className="flex items-center ">
        <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
          4
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 h-fit">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex gap-x-3 items-center">
            <p className="font-semibold text-primary-800 py-3 px-4 w-full bg-primary-700/10 rounded-lg border-r-4 border-primary-500">
              Start Recording
            </p>
          </div>
          <p className="text-sm pl-4 font-medium text-primary-400">
            Congrats for making it this far in adding the HelpMeOut extension to
            your chrome browser. Let's start recording.
          </p>
          <ul className="text-[0.85rem] font-normal marker:text-primary-500 text-primary-300 list-disc list-outside ml-10 space-y-2 pr-4">
            <li>
              From the pin extensions, go to the{' '}
              <span className="text-primary-500 font-bold">
                HelpMeOut extension
              </span>
              {''} and click on it. This will display a window with simple
              confirmations before recording commences.
            </li>
            <li>
              Using the checkers, turn on the video and audio permissions and
              click on the{' '}
              <span className="text-primary-500 font-bold">
                Start Recording
              </span>{' '}
              button to begin capturing your screen.
            </li>
            <li>
              You are now ready to record, download, register to platform, using
              your Google account or email, and then upload your recorded videos
              to your personal database for sharing or future references.
            </li>
          </ul>
        </div>
        <div className="relative flex md:justify-end w-full">
          <img
            src={unpack}
            alt="unpack"
            className=" shadow-2xl border border-primary-50 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default StartRecord;
