import baserequest from './../baserequest'

export default {
  getAlbums (name) {
    console.log(baserequest.URL)
    return baserequest.get(`?q=${name}&type=album`)
  }
}
