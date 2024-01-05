/**
 * Component - Popup
 *
 * Responsible for implementing and rendering a UI modal signifying an email was sent successfully
 *
 * Props: - closeModal : onClick, closes the modal
 * - email: Parses the email entered and saves it in a state
 */

import { Link } from 'react-router-dom';
import cancel from '../assets/close-circle.svg';
import kite from '../assets/success-kite 1.svg';

const Popup = ({ closeModal, email }) => {
  return (
    <div
      className="fixed h-[90vh] md:h-[80vh] w-[90vw] lg:h-[85vh] md:w-[48vw] lg:w-[30vw] bg-[#f8f5f5] rounded-md flex flex-col items-center justify-start py-14 transition-all"
      id="pop-up"
    >
      <div className="flex items-center justify-center relative">
        <img
          alt="cancel"
          src={cancel}
          className="absolute -top-6 right-3 w-5 h-5 cursor-pointer hover:shadow-md"
          onClick={closeModal}
        />
        <img alt="success" src={kite} className=" w-[45%] rounded-full" />
      </div>

      <h3 className="w-[65%] text-base text-center mt-8 mb-10 text-primary-800">
        Your video link has been sent to{' '}
        <span className=" font-semibold text-primary-800">{email}</span>
      </h3>
      <p className="text-[0.85rem] text-primary-900 pb-1">
        Would you need to view this video later?{' '}
      </p>
      <p className="text-[0.8rem] text-primary-900 ">
        Do not worry, it is saved securely
      </p>
      <button
        onClick={closeModal}
        className="text-[0.7rem] text-primary-50 px-5 py-2 bg-primary-800 outline-none border-none rounded-md hover:bg-primary-500 transition-all mt-4 mb-8"
      >
        View Video
      </button>

      <Link
        className="text-[0.75rem] mt-2 md:mt-8 md:mb-2 font-semibold text-primary-800 underline"
        to={'/feed'}
      >
        View all Uploaded Videos
      </Link>
    </div>
  );
};

export default Popup;
