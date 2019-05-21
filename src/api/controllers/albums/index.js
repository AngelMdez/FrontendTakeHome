import baserequest from './../baserequest'

export default {
  getAlbums (name) {
    return baserequest.get(`&q=*${name}*&type=album`)
  }
}
