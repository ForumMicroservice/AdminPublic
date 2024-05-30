import axios from 'axios'

const auth = async (request: any) =>{
  try {
    const user= await axios.post('http://localhost:8000/api/auth', {
      email: request.email,
      password: request.password,
    })
    return user;
  } catch (error) {
    return error
  }
}



const logout = async (request: any): Promise<any> => {
  axios.delete('http://localhost:8080/api/logout', {})
}


export async function RunnableAxios(request: any) {
  const login = await auth(request)
  return login
}
