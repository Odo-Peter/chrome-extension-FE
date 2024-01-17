import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { format, parseISO } from 'date-fns';

import { deleteVideo } from '../services/video';

import { PiDotsThreeOutlineVertical, PiShareNetworkFill } from 'react-icons/pi';
import { BiArrowToRight } from 'react-icons/bi';
import { RiDeleteBin5Fill, RiLoader2Line } from 'react-icons/ri';

const VideoCard = ({ file }) => {
  const [optionsDropDown, setOptionsDropDown] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();

  const handleVideoDelete = async (id) => {
    setIsDeleting(true);
    try {
      await deleteVideo(id);

      toast.success('Deleted successfully.', {
        duration: 4000,
      });
      setIsDeleting(false);
      setOptionsDropDown(false);

      setTimeout(() => {
        navigate('/video_uploads');
      }, 5000);
    } catch (error) {
      console.log(error);
      setIsDeleting(false);
      setOptionsDropDown(false);
      toast.error('Ooops, something went wrong', {
        duration: 5000,
      });
    } finally {
      setIsDeleting(false);
      setOptionsDropDown(false);
    }
  };

  return (
    <div className="border border-primary-100 rounded-lg w-full lg:w-[95%] flex flex-col gap-4 p-4 shadow-xl">
      <video
        className="w-full rounded-md shadow-md mb-2"
        controls
        preload="metadata"
      >
        <source
          src={file.videoPath ? file.videoPath : `${file.videoPath}#t-0.1`}
        />
      </video>
      <div className="flex justify-between ">
        <div className="flex flex-col">
          <Link to={`/file_details/${file.id}`}>
            <h4 className="text-[0.8rem] text-primary-900 font-bold">
              {file.title}
            </h4>
          </Link>
          <p
            className="text-[0.75rem] text-primary-100 font-medium
"
          >
            {format(parseISO(file.date), 'MMMM, d, yyyy')}
          </p>
        </div>
        <div className="flex gap-4">
          <Link to={`/file_details/${file.id}`}>
            <PiShareNetworkFill className="opacity-80 cursor-pointer hover:opacity-100" />
          </Link>
          <div className="relative">
            <PiDotsThreeOutlineVertical
              onClick={() => setOptionsDropDown((prev) => !prev)}
              className="opacity-80 cursor-pointer hover:opacity-100"
            />

            {optionsDropDown ? (
              <div className="absolute right-[50%] top-[54%] border border-primary-100 rounded-md rounded-tr-none shadow-xl flex flex-col p-2 bg-primary-50 divide-y divide-primary-300 w-32">
                <Link
                  to={`/file_details/${file.id}`}
                  className="w-full text-xs py-2 flex items-center justify-center gap-x-1 font-semibold text-primary-600 opacity-80 hover:opacity-100"
                >
                  Video details <BiArrowToRight className="w-4 h-4" />{' '}
                </Link>
                <button
                  onClick={() => handleVideoDelete(file?.id)}
                  className={
                    isDeleting
                      ? 'w-full text-xs py-2 flex items-center justify-center gap-x-1 font-semibold text-[#c93939] opacity-100'
                      : 'w-full text-xs py-2 flex items-center justify-center gap-x-1 font-semibold text-[#c93939] opacity-80 hover:opacity-100'
                  }
                >
                  {isDeleting ? (
                    <>
                      Deleting...{' '}
                      <RiLoader2Line className="w-4 h-4 animate-spin" />{' '}
                    </>
                  ) : (
                    <>
                      Delete video <RiDeleteBin5Fill className="w-4 h-4" />{' '}
                    </>
                  )}
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
