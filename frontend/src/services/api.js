
import axios from 'axios'



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
  const data = {
    fullname,
    email,
    password
  }
  const registerUserResponse = await axios.post(registerRoute.register, data)
  return registerUserResponse ? registerUserResponse.data : null
}


export const userLogin = async (email, password) => {
  const data = {
    email,
    password
  }
  const loginUserResponse = await axios.post(registerRoute.login, data, { withCredentials: true });

  return loginUserResponse ? loginUserResponse.data : null
}



