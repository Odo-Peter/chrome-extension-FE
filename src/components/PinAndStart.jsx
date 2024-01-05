import unpack from '../assets/getStarted/g8.jpg';

const PinAndStart = () => {
  return (
    <div className="flex flex-col gap-y-6 py-5 border-y border-primary-50">
      <div className="flex items-center ">
        <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
          3
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 h-fit">
        <div className="flex flex-col gap-y-4 ">
          <div className="flex gap-x-3 items-center">
            <p className="font-semibold text-primary-800 py-3 px-4 w-full bg-primary-700/10 rounded-lg border-r-4 border-primary-500">
              Pin the extension
            </p>
          </div>
          <p className="text-sm pl-4 font-medium text-primary-400">
            This part shows how to pin the extension on your chrome browser, for
            ease of access.
          </p>
          <ul className="text-[0.85rem] font-normal marker:text-primary-500 text-primary-300 list-disc list-outside ml-10 space-y-2 pr-4">
            <li>
              Now that we have loaded our packed extension from the chrome
              extension settings, we will{' '}
              <span className="text-primary-500 font-bold">pin</span>
              {''} the{' '}
              <span className="text-primary-500 font-bold">
                HelpMeOut extension
              </span>
              {''} to the extensions tab for easy access.
            </li>
            <li>
              As illustrated in the image, navigate to the top-right of the
              browser, click the extensions icon, from the dropdown, click the{' '}
              <span className="text-primary-500 font-bold">pin icon</span> to
              automatically add{' '}
              <span className="text-primary-500 font-bold">HelpMeOut</span> to
              the pinned extensions.{' '}
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

export default PinAndStart;
