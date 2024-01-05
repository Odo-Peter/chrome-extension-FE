/**
 * Components - VideoDetails
 *
 * Responsible for taking form inputs in different formats, inputs are passed down as props to the <Home /> page components.
 *
 * Props: - OpenModal: If true, a simple modal that confirms email is been sent successfully
 *       - handleEmailChange, handleTitleChange,       handleFileChange: sets the state for each of the form fields
 */

const VideoDetails = ({
  handleUploads,
  files,
  title,
  handleFileChange,
  handleTitleChange,
  isUploading,
}) => {
  return (
    <div className="flex flex-col md:pr-4" id="video-details">
      <h3 className="font-bold text-primary-900 text-2xl md:text-3xl mb-5">
        Your video is almost ready!
      </h3>

      <div className="mb-8">
        <form className="flex flex-col gap-2" onSubmit={handleUploads}>
          <p className="text-[0.8rem] text-primary-600 font-semibold">
            Video Title
          </p>
          <input
            type="text"
            onChange={handleTitleChange}
            value={title}
            placeholder="Give your video a title..."
            className="border-0 outline-none bg-primary-50 text-[0.8rem] w-full rounded-md py-[13px] px-3 mb-4 placeholder:text-[0.8rem] placeholder:text-primary-300 focus:placeholder:opacity-60"
          />
          <p className="text-[0.8rem] text-primary-600 font-semibold">
            Select the Video File
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".webm .mp4"
            className="border-0 outline-none bg-primary-50 file:text-[0.8rem] file:text-opacity-80 text-[0.8rem] w-full rounded-md py-[11px] px-3 file:border-0 file:bg-primary-900/10 file:py-1 file:px-4 file:text-primary-900 file:rounded-md file:mr-4 file:hover:cursor-pointer file:transition"
          />
          <button
            className={
              !title || isUploading || !files
                ? 'py-[10px] mt-6 w-full border-none outline-none bg-primary-800 text-primary-50 flex items-center rounded-md text-sm font-semibold justify-center gap-2 hover:bg-primary-500 hover:shadow-md cursor-not-allowed'
                : 'py-[10px] mt-6 w-full border-none outline-none bg-primary-800 text-primary-50 flex items-center rounded-md text-sm font-semibold justify-center gap-2 hover:bg-primary-500 hover:shadow-md cursor-pointer'
            }
            type="submit"
            disabled={!title || isUploading || !files}
          >
            {isUploading ? 'Uploading File...' : 'Upload File'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoDetails;
