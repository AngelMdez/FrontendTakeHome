import axios from 'axios'
import auth from '../../api/auth'

const baserequest = axios.create({
  baseURL: 'https://api.spotify.com/v1/search?market' + navigator.language
})

baserequest.interceptors.request.use(async config => {
  const response = await await auth.getToken()
  if (response && response.data && response.data.token) {
    config.headers.Authorization = `Bearer ${response.data.token}`
  }
  return config
})

export default baserequest
