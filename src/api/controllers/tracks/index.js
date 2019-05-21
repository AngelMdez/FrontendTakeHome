import baserequest from './../baserequest'

export default {
  getTracks (name) {
    return baserequest.get(`&q=*${name}*&type=track`)
  }
}
