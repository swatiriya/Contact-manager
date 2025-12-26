
import axios from 'axios'

const API_BASE_URL = "http://localhost:3000/api/v1"

<<<<<<< HEAD
// User Authentication APIs
const userRegister = async (fullname, email, password) => {
=======

const envVariables = {
  Backend_Url: import.meta.env.VITE_BACKEND_URL,
  Backend_Port: import.meta.env.VITE_BACKEND_PORT,
}


const mainApiRef = {
  users: "/api/v1/users",
}

const backendUrlForUsers = `${envVariables.Backend_Url}${envVariables.Backend_Port}${mainApiRef.users}`

const registerRoute = {
  register: `${backendUrlForUsers}/register`,
  login: `${backendUrlForUsers}/login`,
}


export const userRegister = async (fullname, email, password) => {
>>>>>>> 0ec9c9d8541e497f8c9a99112bbad3c53919925e
  const data = {
    fullname,
    email,
    password
  }
<<<<<<< HEAD
  const registerUserResponse = await axios.post(`${API_BASE_URL}/users/register`, data)
  return registerUserResponse.data
}

const userLogin = async (email, password) => {
=======
  const registerUserResponse = await axios.post(registerRoute.register, data)
  return registerUserResponse ? registerUserResponse.data : null
}


export const userLogin = async (email, password) => {
>>>>>>> 0ec9c9d8541e497f8c9a99112bbad3c53919925e
  const data = {
    email,
    password
  }
<<<<<<< HEAD
  const loginUserResponse = await axios.post(`${API_BASE_URL}/users/login`, data)
  return loginUserResponse.data
}

const checkUserAuth = async () => {
  const authResponse = await axios.post(`${API_BASE_URL}/users/user-auth`, {})
  return authResponse.data
}

const userLogout = async () => {
  const logoutResponse = await axios.post(`${API_BASE_URL}/users/logout`, {})
  return logoutResponse.data
}

export { userRegister, userLogin, checkUserAuth, userLogout }
=======
  const loginUserResponse = await axios.post(registerRoute.login, data, { withCredentials: true });

  return loginUserResponse ? loginUserResponse.data : null
}



>>>>>>> 0ec9c9d8541e497f8c9a99112bbad3c53919925e
