import axios from 'axios'

export default {
  getToken: function () {
    return axios.get(`http://localhost:3000/token`)
  }
}
