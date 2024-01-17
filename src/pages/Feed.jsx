/**
 * Pages - Feed page
 *
 * Responsible for rendering the videos of from the unique usersDB onto the <videoFeed /> components .
 *
 * Props: - OpenModal: If true, a simple modal that confirms email is been sent successfully
 * - handleEmailChange, email: checks for email and handles the sneding in the home page
 */

import { useState, useEffect } from 'react';

import { isPastSevenDays } from '../utils/date';
import { getAllUsers } from '../services/users';

import TopFeed from '../components/TopFeed';
import VideoFeed from '../components/VideoFeed';
import Footer from '../components/Footer';

const Feed = () => {
  const [user, setUser] = useState(null);
  const [usersDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('currentUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    getAllUsers().then((data) => setUserDetails(data));
  }, []);

  const uniqueUser =
    usersDetails && user
      ? usersDetails.filter((u) => u.email === user?.email)
      : null;

  const recentFiles =
    uniqueUser && uniqueUser[0]?.videos?.length > 0
      ? uniqueUser[0]?.videos?.filter((vid) => isPastSevenDays(vid?.date) < 7)
      : null;

  const olderFiles =
    uniqueUser && uniqueUser[0]?.videos?.length > 0
      ? uniqueUser[0]?.videos?.filter((vid) => isPastSevenDays(vid?.date) > 7)
      : null;

  return (
    <section>
      <TopFeed message={'Here are your uploaded videos'} isFeed={true} />
      <div className="px-10 lg:px-20 py-6 lg:py-10 mt-44">
        <VideoFeed recentFiles={recentFiles} olderFiles={olderFiles} />
      </div>
      <Footer />
    </section>
  );
};

export default Feed;
