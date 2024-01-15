/**
 * Components - VideoFeed
 *
 * Responsible for recieving files (videos) props, using it to render the video card on the user's feed page
 *
 * Props: - recentFiles : sorts the userDB and returns the files that are less than 7days old after positng
 * - olderFiles : sorts the userDB and returns the files that are older than 7days
 */

import { Link } from 'react-router-dom';

import { PiSmileyWink, PiSmileyXEyes } from 'react-icons/pi';
import { BiArrowFromRight, BiLoader } from 'react-icons/bi';
import VideoCard from './VideoCard';

const VideoFeed = ({ recentFiles, olderFiles }) => {
  return (
    <div className="my-8 flex flex-col justify-center  gap-10 mb-20">
      {/* //Recent files */}
      <p className=" font-semibold text-primary-200 text-sm">Recent files</p>

      {!recentFiles ? (
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h4 className="text-xl md:text-2xl text-primary-500 font-bold">
            Getting Recent Videos
          </h4>
          <div className="flex items-center justify-center py-10">
            <BiLoader className="h-14 w-14 text-primary-600 animate-spin" />
          </div>
          <p className="font-medium text-primary-200 text-center text-xs md:text-sm md:text-left">
            Checking your network connection, please wait...
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-x-6 ">
          <>
            {recentFiles.length === 0 && (
              <div className="flex flex-col gap-y-4 md:gap-y-6 items-center justify-center py-10">
                <p className="font-medium text-primary-200 text-center text-sm md:text-base">
                  Ooops, looks like it's being a minute you uploaded a video
                  file.
                </p>
                <PiSmileyWink className="h-16 w-16 text-primary-300" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-x-6 gap-y-8 ">
              {recentFiles &&
                recentFiles.map((file) => (
                  <VideoCard file={file} key={file?.id} />
                ))}
            </div>
          </>
        </div>
      )}

      {/* Back to Uploads Button */}
      <div className="flex items-center justify-center w-full">
        <Link
          to={'/video_uploads'}
          className="py-[10px] mt-4 md:mt-6 w-full md:w-[60%] border-none outline-none bg-primary-800 text-primary-50 flex items-center rounded-full text-sm font-semibold justify-center gap-2 hover:bg-primary-500 hover:shadow-md cursor-pointer"
        >
          <BiArrowFromRight className="h-4 w-4 text-primary-50 mr-2" />
          Upload More Videos
        </Link>
      </div>

      {/* Files From Last week */}
      <p className=" font-semibold text-primary-200 text-sm md:pt-16 pt-10">
        Some few days back
      </p>

      {!olderFiles ? (
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h4 className="text-xl md:text-2xl text-primary-500 font-bold">
            Getting Older Videos
          </h4>
          <div className="flex items-center justify-center py-10">
            <BiLoader className="h-14 w-14 text-primary-600 animate-spin" />
          </div>
          <p className="font-medium text-primary-200 text-center text-xs md:text-sm md:text-left">
            Checking your network connection, please wait...
          </p>
        </div>
      ) : (
        <>
          {olderFiles.length === 0 ? (
            <div className="flex flex-col items-center  justify-center gap-4">
              <h4 className="text-2xl text-primary-500 font-bold">
                You Are All Caught Up
              </h4>
              <p className="font-medium text-primary-200 text-sm">
                All your videos are recent, ciaos
              </p>
              <PiSmileyXEyes className="h-16 w-16 text-primary-300" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-x-6 gap-y-8 ">
              {olderFiles.map((file) => (
                <VideoCard file={file} key={file?.id} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VideoFeed;
