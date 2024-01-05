/**
 * Component - Video Panel
 *
 * Responsible for housing and displaying the "about-to-be-uploaded" video for the user's preview before finalizing the uploads by clicking the upload button from the <videoDetails />.
 *
 * Just handles only the preview and nothing complicated.
 */

import { BiErrorCircle } from 'react-icons/bi';

const VideoPanel = ({ src }) => {
  return (
    <div>
      {src ? (
        <>
          <h1 className="text-primary-300 text mb-4 text-sm">
            Here is a preview of your video
          </h1>
          <video
            className="w-full rounded-md shadow-md relative mb-4"
            controls
            autoPlay
            muted
          >
            <source src={src} />
          </video>
        </>
      ) : (
        <>
          <h1 className="text-center text-primary-800 font-semibold text-2xl mb-2">
            No Video to Preview
          </h1>
          <p className="text-[0.8rem] text-center text-primary-200">
            Upload a screen recorded video to preview
          </p>
          <div className="flex items-center justify-center mt-12 md:mt-20">
            <BiErrorCircle className="w-16 h-16 text-primary-500" />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPanel;
