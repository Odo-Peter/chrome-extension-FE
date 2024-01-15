import axios from 'axios';
const BASE_URL = '/api/videos';

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getUserVideos = async () => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const request = await axios.get(BASE_URL);
  return request.data;
};

export const createVideo = async (videoObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(BASE_URL, videoObject, config);
  return response.data;
};

export const getUserVideo = async (id) => {
  const request = await axios.get(`${BASE_URL}/${id}`);
  return request.data;
};

// const updateTodo = async (todoObject, id) => {
//     const config = {
//       headers: { Authorization: token },
//     };

//     const res = await axios.put(`${baseURL}/${id}`, todoObject, config);
//     return res.data;
//   };

export const deleteVideo = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const res = await axios.delete(`${BASE_URL}/${id}`, config);
  return res.data;
};

//   // eslint-disable-next-line import/no-anonymous-default-export
//   export default { setToken, getUserTodos, createTodo, deleteOne, updateTodo };
