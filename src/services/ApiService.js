import axios from "axios";

const baseUrl = "http://localhost:8080/api";
const authUrl = `${baseUrl}/auth`;
const noteUrl = `${baseUrl}/notes`;
const myStorage = window.localStorage;

/* axios.interceptors.request.use(function (config) {
  const token = myStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}); */

axios.interceptors.request.use(
  (config) => {
    const token = myStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const login = async (username, password) => {
  const response = await axios.post(`${authUrl}/signin`, {
    username,
    password,
  });
  console.log(response.data.accessToken);
  myStorage.setItem("token", response.data.accessToken);
  axios.interceptors.request.use(function (config) {
    const token = response.data.accessToken;
    config.headers.Authorization = token;

    return config;
  });

  window.location.href = "/notes";
};

export const logout = async () => {
  myStorage.removeItem("token");
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = null;
    return config;
  });
};

// {
//   "username":"testuser",
//   "email":"testuser@gmail.com",
//   "password":"123456",
//   "role":["ROLE_USER"]
// }

export const register = (data) => {
  return axios.post(`${authUrl}/signup`, data);
};

export const getAllNotes = () => {
  return axios.get(noteUrl);
};

export const createNote = (note) => {
  return axios.post(noteUrl, note);
};

export const updateNote = (note) => {
  return axios.put(`${noteUrl}/${note.id}`, note);
};

export const deleteNote = (noteId) => {
  return axios.delete(`${noteUrl}/${noteId}`);
};
