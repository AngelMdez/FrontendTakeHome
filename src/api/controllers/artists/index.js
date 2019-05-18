import baserequest from './../baserequest'

export default {
  getArtist (name) {
    console.log(baserequest.URL)
    return baserequest.get(`?q=${name}&type=artist`)
  }
}
