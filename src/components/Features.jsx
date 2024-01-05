import record from '../assets/record-circle.svg';
import share from '../assets/easy_share.svg';
import revisit from '../assets/revisit.svg';
import repo from '../assets/Video Repository.svg';

const Features = () => {
  return (
    <div
      className="flex pt-6 flex-col gap-10 mb-10 md:mb-24 px-10 lg:px-20"
      id="features"
    >
      <div>
        <h2 className="text-2xl pb-2 text-center font-bold text-primary-900">
          Features
        </h2>
        <p className="text-[0.8rem] text-center text-primary-300">
          Key Highlights of Our Extension
        </p>
      </div>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <div className="flex flex-col md:w-[85%] lg:w-[75%] gap-10">
          <div className="flex gap-3">
            <img
              alt="record"
              src={record}
              className="w-10 h-10 p-2 rounded-full bg-primary-700"
            />
            <div className="flex flex-col ">
              <h4 className="text-base font-semibold text-primary-800 pb-2">
                Simple Screen Recording
              </h4>
              <p className="text-[0.8rem] text-primary-200">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <img
              alt="share"
              src={share}
              className="w-10 h-10 p-2 rounded-full bg-primary-700"
            />

            <div className="flex flex-col">
              <h4 className="text-base font-semibold text-primary-800 pb-2">
                Easy to Share URL
              </h4>
              <p className="text-[0.8rem] text-primary-200">
                Share your recordings instantly with a single link. No
                attachments, no downloads
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              alt="revisit"
              src={revisit}
              className="w-10 h-10 p-2 rounded-full bg-primary-700"
            />
            <div className="flex flex-col ">
              <h4 className="text-base font-semibold text-primary-800 pb-2">
                Revisit Recording
              </h4>
              <p className="text-[0.8rem] text-primary-200">
                Access and review your past content effortlessly. Your
                recordings, always at your finger tips
              </p>
            </div>
          </div>
        </div>

        <div className="shadow-xl rounded-md">
          <img alt="video repo" src={repo} className="h-[90%] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Features;
