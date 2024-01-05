import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGoogleLogin } from '@react-oauth/google';
import toast from 'react-hot-toast';

import { createUser, getAllUsers, getGoogleAccount } from '../services/users';
import { loginUser } from '../services/login';

import github from '../assets/icons8-github.svg';
import google from '../assets/icons8-google.svg';
import icon from '../assets/android-chrome-512x512.png';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: (res) => {
      setUser(res);
      return googleUserAuth();
      // return console.log(res);
    },
    onError: (err) => console.log('Login failed', err),
  });

  const googleUserAuth = async () => {
    if (user) {
      const res = await getGoogleAccount(user.access_token);

      const allUsers = await getAllUsers();
      const checkedUser = allUsers.find((user) => user.email === res.email);

      if (!checkedUser) {
        try {
          await createUser({
            email: res.email,
            password: res.id,
          });
        } catch (err) {
          console.log(err);
        }
      }

      try {
        const availableUser = await loginUser({
          email: res.email,
          password: res.id,
        });

        if (availableUser) {
          toast.success(`Logging you in as ${res.name}`);

          window.localStorage.clear();
          window.localStorage.setItem(
            'currentUser',
            JSON.stringify(availableUser)
          );

          setTimeout(() => {
            navigate('/home');
          }, 4000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleLoginOrCreateUser = async (e) => {
    e.preventDefault();
    const allUsers = await getAllUsers();

    const checkedUser = allUsers.find((u) => u.email === email);
    if (!checkedUser) {
      try {
        await createUser({
          email,
          password,
        });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const availableUser = await loginUser({
        email,
        password,
      });

      if (availableUser) {
        toast.success(
          `Logging you in as ... ${availableUser.email.split('@')[0]}`
        );

        setEmail('');
        setPassword('');

        window.localStorage.clear();
        window.localStorage.setItem(
          'currentUser',
          JSON.stringify(availableUser)
        );

        setTimeout(() => {
          navigate('/video_uploads');
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full pt-6 px-8 md:pt-10 md:flex md:flex-col md:justify-center md:overflow-y-hidden">
      <div className="hidden md:flex md:mb-10">
        <div className="hidden md:flex md:items-center md:justify-start gap-1 cursor-pointer py-1 rounded-md">
          <img alt="logo" src={icon} className="h-6 w-6" />
          <h1 className="font-semibold text-primary-800">HelpMeOut</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mb-5">
        <h2 className=" font-extrabold text-primary-900 text-2xl md:hidden">
          Create an account
        </h2>
        <h2 className=" hidden md:block font-extrabold text-primary-900 text-2xl">
          Log in or Sign up
        </h2>
        <p className="text-[0.8rem] text-primary-300 text-center w-[95%] md:w-[40%] lg:w-[25%]">
          Join millions of others in sharing successful moves on HelpMeOut
        </p>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center mb-5">
        <button
          className="flex items-center gap-2 border border-primary-900 w-full md:w-[50%] lg:w-[35%] justify-center p-2 rounded-xl cursor-pointer hover:bg-primary-50 hover:transition-all"
          onClick={() => handleGoogleAuth()}
        >
          <img alt="facebook" src={google} className="h-6 w-6" />
          <p className="font-medium text-primary-900 text-[0.82rem]">
            Continue with Google
          </p>
        </button>
        <button className="flex items-center gap-2 border border-primary-900 w-full md:w-[50%] lg:w-[35%] justify-center p-2 rounded-xl cursor-pointer hover:bg-primary-50 hover:transition-all">
          <img alt="google" src={github} className="h-6 w-6" />
          <p className="font-medium text-primary-900 text-[0.82rem]">
            Continue with GitHub
          </p>
        </button>
      </div>

      <div className="flex items-center justify-center mb-5 ">
        <div className="h-[1px] w-[45%] md:w-[20%] lg:w-[15%]  bg-primary-200" />
        <p className="text-[0.8rem] text-primary-100 px-2">or</p>
        <div className="h-[1px] w-[45%] md:w-[20%] lg:w-[15%] bg-primary-200" />
      </div>

      <form onSubmit={handleLoginOrCreateUser}>
        <div className="mb-5 md:mb-8 md:flex md:flex-col md:w-full md:items-center">
          <div className="mb-3 md:w-[50%] lg:w-[35%] md:flex md:flex-col justify-center">
            <p className="text-[0.8rem] text-primary-900 pb-[5px] font-medium">
              Email
            </p>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-primary-200 rounded-lg outline-none py-[8px] text-[0.8rem] px-4 w-full placeholder:text-[0.8rem] placeholder:font-medium placeholder:text-primary-500  focus:placeholder:opacity-70"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-3 md:w-[50%] lg:w-[35%] md:flex md:flex-col justify-center">
            <p className="text-[0.8rem] text-primary-900 pb-[5px] font-medium">
              Password
            </p>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-primary-200 text-[0.8rem] rounded-lg outline-none py-[8px] px-4 w-full placeholder:text-[0.8rem] placeholder:font-medium placeholder:text-primary-500 focus:placeholder:opacity-70"
              placeholder="Enter your Password"
            />
          </div>
        </div>

        <div className="mb-16 md:flex md:justify-center md:items-center">
          <button
            className="md:hidden border-0 outline-none py-[6px] text-center bg-primary-800 text-[0.8rem] text-primary-50 w-full rounded-lg cursor-pointer hover:bg-primary-500"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="hidden md:block border-0 outline-none py-[8px] text-center bg-primary-800 text-[0.8rem] text-primary-50 w-[50%] lg:w-[35%] rounded-lg cursor-pointer hover:bg-primary-500"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
