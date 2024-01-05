/**
 * Component - Houses the transcripts data
 *
 * Responsible for implementing the transcripts of an uploaded video, this components uses third party dependencies to populate the transcription into the DOM in real time.
 *
 * All transcription functionalities are handled in this page
 */

import { dummyTranscripts } from '../utils/dummyData';

const Transcript = ({ videoSrc }) => {
  if (!videoSrc) {
    return (
      <div className="flex flex-col items-start border-primary-100 pl-4 border-l h-full">
        <h4 className=" text-primary-900 font-semibold pb-2">Transcript</h4>
        <p className="text-[0.8rem] text-primary-200">
          Cannot generate any transcripts at the moment, try uploading a screen
          recorded video to your custom database and view videos alongside
          transcripts on your feed page.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start border-primary-100 pt-6 md:pt-0 border-t md:border-t-0 md:pl-6 md:border-l h-full">
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

      <div className=" flex flex-col overflow-y-auto mt-4 justify-center items-start h-[40vh]">
        {dummyTranscripts.map((t) => (
          <div key={t.time} className="flex justify-center gap-4 mb-2">
            <p className="text-[0.75rem] text-primary-500">{t.time}</p>
            <p className="text-[0.75rem] text-primary-700">{t.transcript}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transcript;
