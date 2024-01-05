import rec from '../assets/rec.jpg';
import share from '../assets/share.jpg';
import learn from '../assets/lea.jpg';

const HowItWorks = () => {
  return (
    <div
      className="flex flex-col pt-10 px-10 lg:px-20  items-center mb-20"
      id="how-it-works"
    >
      <h2 className="text-2xl font-bold text-primary-900 text-center mb-6">
        How it works
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-12 md:gap-6">
        <div className="flex flex-col items-center gap-6 p-6 shadow-lg rounded-md h-fit mx-auto border border-primary-50 md:border-0 [w-90%] hover:shadow-2xl">
          <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
            1
          </p>
          <p className="text-center font-semibold text-primary-800">
            Record Screen
          </p>
          <p className="text-center text-[0.75rem] text-primary-200">
            Click the "Start Recording" button in our extension. Choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <img alt="frame-1" src={rec} className="h-32 w-full" />
        </div>

        <div className="flex flex-col items-center gap-6 p-6 shadow-lg rounded-md h-fit mx-auto border border-primary-50 md:border-0 [w-90%] hover:shadow-2xl">
          <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
            2
          </p>
          <p className="text-center font-semibold text-primary-800">
            Share Your Recording
          </p>
          <p className="text-center text-[0.75rem] text-primary-200">
            We genreate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <img alt="frame-2" src={share} className="w-full h-32" />
        </div>

        <div className="flex flex-col items-center gap-6 p-6 shadow-lg rounded-md h-fit mx-auto border border-primary-50 md:border-0 [w-90%] hover:shadow-2xl">
          <p className="flex items-center justify-center h-9 w-9 rounded-full bg-primary-800 font-bold text-primary-50">
            3
          </p>
          <p className="text-center font-semibold text-primary-800">
            Learn Effortlessly
          </p>
          <p className="text-center text-[0.75rem] text-primary-200">
            Recipients can access your video effortlessly through the provided
            link, with user-friendly interface suitable for anyone and everyone.
          </p>
          <img alt="frame-3" src={learn} className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
