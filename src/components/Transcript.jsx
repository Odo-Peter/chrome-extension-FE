/**
 * Component - Houses the transcripts data
 *
 * Responsible for implementing the transcripts of an uploaded video, this components uses third party dependencies to populate the transcription into the DOM in real time.
 *
 * All transcription functionalities are handled in this page
 */

import { BiSmile } from 'react-icons/bi';

// import { dummyTranscripts } from '../utils/dummyData';

const Transcript = ({ videoSrc, transcript }) => {
  if (!videoSrc) {
    return (
      <div className="flex flex-col items-start ">
        <h4 className=" text-primary-900 font-semibold pb-2">Transcript</h4>
        <p className="text-[0.8rem] text-primary-200">
          Cannot generate any transcripts at the moment, try uploading a screen
          recorded video to your custom database and view videos alongside
          transcripts on your feed page.
        </p>
      </div>
    );
  }

  //border-primary-100 pt-6 md:pt-0  md:border-l border-t md:border-t-0 md:pl-6

  return (
    <div className="flex flex-col justify-start border-t md:border-t-0 md:border-l border-l-primary-200 pl-6">
      <h4 className=" text-primary-900 font-semibold pb-2">Transcript</h4>
      <div>
        <select
          name="languages"
          id="languages"
          className=" outline-none border border-primary-100 text-[0.72rem] px-2 py-[5px] rounded-md w-[30%]"
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>

      {transcript === '' ? (
        <div className=" flex flex-col justify-center items-center lg:h-[50vh] h-[40vh] gap-4">
          <BiSmile className="w-16 h-16 text-primary-600" />
          <p className="text-[0.8rem] text-primary-400 text-center">
            Ooops, looks like your video has no sound to it, if this is not what
            you intended, try deleting it, re-record and upload again, to get
            accurate transcripts.
          </p>
        </div>
      ) : (
        <div className=" flex flex-col overflow-y-auto mt-4  items-start lg:h-[46.5vh] h-[40vh] border border-primary-100 px-4 py-2 rounded-lg">
          <p className="text-[0.75rem]">{transcript}</p>
        </div>
      )}
    </div>
  );
};

export default Transcript;
