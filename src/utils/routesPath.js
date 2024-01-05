import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Landing from '../pages/Landing';
import Feed from '../pages/Feed';
import FileDetails from '../pages/FileDetails';
import GetStarted from '../pages/GetStarted';

export const routes = [
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/get_started',
    element: <GetStarted />,
  },
  {
    path: '/video_uploads',
    element: <Home />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/file_details/:id',
    element: <FileDetails />,
  },
  {
    path: '/auth/sign_in',
    element: <Auth />,
  },
];
