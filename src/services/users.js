import axios from 'axios';
const BASE_URL = '/api/users';

export const createUser = async (credentials) => {
  const res = await axios.post(BASE_URL, credentials);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getIndividualUser = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const getGoogleAccount = async (token) => {
  const res = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }
  );
  return res.data;
};
