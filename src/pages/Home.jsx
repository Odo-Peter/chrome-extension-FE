/**
 * Page - Home Page - Routed from auth/sign_in page
 *
 * Responsible for implementing the form inputs in different formats, inputs are passed here as props from the <VideoDetails /> components.
 *
 * Most functionalities from the different components are handled in this page
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { createVideo } from '../services/video';

import { BiArrowFromLeft } from 'react-icons/bi';

import CTA from '../components/CTA';
import Footer from '../components/Footer';
import TopFeed from '../components/TopFeed';
import VideoDetails from '../components/VideoDetails';
import VideoPanel from '../components/VideoPanel';
import toast from 'react-hot-toast';

const Home = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState(null);

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUploads = async (e) => {
    e.preventDefault();

    try {
      setIsUploading(true);

      const data = new FormData();
      data.set('title', title);
      data.set('file', files[0]);

      await createVideo(data);
      setIsUploading(false);
      toast.success('Uploaded successfully.', {
        duration: 4000,
      });

      setTimeout(() => {
        navigate('/feed');
      }, 5000);
    } catch (error) {
      console.log(error);
      setIsUploading(false);
      toast.error('Ooops, something went wrong.', {
        duration: 5000,
      });
    } finally {
      setTitle('');
      setFiles(null);
    }
  };

  const sourceFile = files ? URL.createObjectURL(files[0]) : '';

  return (
    <section className="overflow-x-hidden relative">
      <div className="">
        <TopFeed
          message="Upload your videos to keep them secured"
          isFeed={false}
        />
        <div className="flex flex-col md:grid grid-cols-2 gap-4 px-10 lg:px-20 py-6 lg:py-10 mt-48 md:mt-56">
          <VideoDetails
            title={title}
            files={files}
            handleFileChange={handleFileChange}
            handleTitleChange={handleTitleChange}
            handleUploads={handleUploads}
            isUploading={isUploading}
          />
          <div className="flex flex-col gap-8 border-t md:border-t-0 md:border-l border-l-primary-100 md:pl-6">
            <VideoPanel src={sourceFile ? sourceFile : null} />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 items-center justify-center w-full pb-14 mt-6">
          <p className="text-sm text-primary-300 font-semibold">
            To see your already uploaded videos...
          </p>
          <Link
            to={'/feed'}
            className="py-[10px] w-[80%] md:w-[60%] border-none outline-none bg-primary-800 text-primary-50 flex items-center rounded-full text-sm font-semibold justify-center gap-2 hover:bg-primary-500 hover:shadow-md cursor-pointer"
          >
            Go to Video Feed
            <BiArrowFromLeft className="h-4 w-4 text-primary-50 ml-2" />
          </Link>
        </div>
      </div>
      <CTA />
      <Footer />
    </section>
  );
};

export default Home;
