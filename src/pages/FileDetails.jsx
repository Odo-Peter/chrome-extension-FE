/**
 * Page - File_details Page - Routed from /feeds
 *
 * Responsible for implementing business logic pf fetching a particular video by its ID, sending video via socials and handling transcripts
 *
 * Most functionalities from the different components are handled in this page from the props passed down.
 */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { format, parseISO } from 'date-fns';

import { getUserVideo } from '../services/video';

import { BiLoader } from 'react-icons/bi';

import ShareVids from '../components/ShareVIds';
import TopFeed from '../components/TopFeed';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import Transcript from '../components/Transcript';

const FileDetails = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [video, setVideo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getUserVideo(id).then((data) => setVideo(data));
  }, [id]);

  // console.log(video);
  // console.log(`http://localhost:3001/${video?.videoPath}`);

  const openModalAndSendEmail = (e) => {
    e.preventDefault();
    setIsPopup(true);

    //handle email sending
    toast.success(`Email sent to ${email}`, {
      duration: 6000,
      position: 'top-right',
    });
  };

  const closeModal = () => {
    setIsPopup(false);
    setEmail('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section
      className={
        !isPopup ? 'relative overflow-x-hidden' : 'relative overflow-hidden'
      }
    >
      {isPopup && (
        <>
          <div className="fixed top-0 left-0 bg-[#0c0c0c] opacity-40 w-screen h-screen z-40 overflow-y-hidden" />
          <div className="absolute flex justify-center w-screen h-screen items-center top-0 left-0 z-50">
            <Popup closeModal={closeModal} email={email} />
          </div>
        </>
      )}
      <TopFeed
        message={'Home / Recent Videos /'}
        boldText={video?.title ? video?.title : 'Fetching details'}
        isFeed={false}
      />

      {!video ? (
        <div className="flex flex-col items-center justify-center gap-y-4 py-20 lg:py-48 mt-48">
          <BiLoader className="h-16 w-16 text-primary-600 animate-spin" />
          <p className="font-medium text-primary-200 text-center text-xs md:text-sm md:text-left">
            Checking your network connection, please wait...
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10 px-10 lg:px-20 py-6 lg:py-10 mt-44">
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
            <div className="border border-primary-100 w-full p-3 rounded-lg shadow-xl mb-6">
              <video
                className="w-full rounded-md mb-4"
                controls
                preload="metadata"
              >
                <source src={`http://localhost:3001/${video?.videoPath}`} />
              </video>

              <p
                className="text-[0.75rem] text-primary-200 font-medium
              "
              >
                {format(parseISO(video?.date), 'MMMM, d, yyyy')}
              </p>
            </div>
            <div>
              <Transcript videoSrc={true} transcript={video?.transcript} />
            </div>
          </div>

          <ShareVids
            url={`http://localhost:3001/${video?.videoPath}`}
            isFeed={false}
            handleEmailChange={handleEmailChange}
            email={email}
            openModalAndSendEmail={openModalAndSendEmail}
          />
        </div>
      )}

      <Footer />
    </section>
  );
};

export default FileDetails;
