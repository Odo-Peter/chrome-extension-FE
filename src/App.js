import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import { setToken } from './services/video';

import Landing from './pages/Landing';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import FileDetails from './pages/FileDetails';
import Auth from './pages/Auth';
import Feed from './pages/Feed';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('currentUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
      setToken(user?.token);
    }
  }, []);

  return (
    <main className="">
      <Toaster />
      <Routes>
        <Route exact path={'/'} element={user ? <Home /> : <Landing />} />
        <Route
          exact
          path={'/video_uploads'}
          element={user ? <Home /> : <Auth />}
        />
        <Route exact path={'/feed'} element={user ? <Feed /> : <Auth />} />
        <Route exact path={'/get_started'} element={<GetStarted />} />
        <Route
          exact
          path={'/file_details/:id'}
          element={user ? <FileDetails /> : <Auth />}
        />
        <Route exact path={'/auth/sign_in'} element={<Auth />} />
      </Routes>
    </main>
  );
};

export default App;
