
import axios from 'axios'


const registerRoute = {
  register: "http://localhost:3000/api/v1/users/register"
}


const userRegister = async (fullname, email, password) => {
  const data = {
    fullname,
    email,
    password
  }
  const registerUserResponse = await axios.post(registerRoute.register, data)
  return registerUserResponse.data
}
