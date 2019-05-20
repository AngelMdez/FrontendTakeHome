import baserequest from './../baserequest'
import singlerequest from '../singlerequest'

export default {
  getArtist (name) {
    return baserequest.get(`&q=${name}*&type=artist`)
  },

  getArtistById (id) {
    return singlerequest.get('artists/' + id)
  },
  getTopTracks (id) {
    return singlerequest.get('artists/' + id + '/top-tracks?country=' + navigator.language.slice(3, 5))
  },

  getRelated (id) {
    return singlerequest.get('artists/' + id + '/related-artists')
  }
}
