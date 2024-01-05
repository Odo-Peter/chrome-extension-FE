import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { setToken } from './services/video';

import { routes } from './utils/routesPath';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('currentUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
      setToken(user?.token);
    }
  }, []);

  return (
    <main className="bg-[#fff]/10 max-w-[1440px]">
      <Toaster />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
};

export default App;
