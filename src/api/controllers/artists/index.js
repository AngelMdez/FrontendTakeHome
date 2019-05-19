import baserequest from './../baserequest'

export default {
  getArtist (name) {
    return baserequest.get(`&q=*${name}*&type=artist`)
  }
}
