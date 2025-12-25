
import axios from 'axios'

const API_BASE_URL = "http://localhost:3000/api/v1"

// User Authentication APIs
const userRegister = async (fullname, email, password) => {
  const data = {
    fullname,
    email,
    password
  }
  const registerUserResponse = await axios.post(`${API_BASE_URL}/users/register`, data)
  return registerUserResponse.data
}

const userLogin = async (email, password) => {
  const data = {
    email,
    password
  }
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
