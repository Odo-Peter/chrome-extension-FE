import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const CTA = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-8 bg-primary-50 bg-opacity-50 py-8 mb-8 w-full gap-6">
      <h3 className=" w-[85%] md:w-[60%] lg:w-[35%] font-bold text-[0.9rem] text-center">
        To ensure the availability and privacy of your video, we recommend
        saving it to your custom database.
      </h3>
      <ScrollLink
        activeClass="active"
        to="video-details"
        spy={true}
        smooth={true}
        duration={1000}
        offset={-250}
        className="text-[0.75rem] text-primary-50 px-8 py-2 bg-primary-800 outline-none border-none rounded-md hover:bg-primary-500 transition-all cursor-pointer"
      >
        Save Video
      </ScrollLink>

      <p className="text-sm text-primary-300 text-center">
        Don't know how to upload?{' '}
        <Link
          className="font-semibold text-primary-800 underline opacity-90 hover:opacity-100"
          to={'/how_to_upload'}
        >
          Read the docs
        </Link>
      </p>
    </div>
  );
};

export default CTA;
