import singlerequest from '../singlerequest'

export default {
  getPlaylists () {
    return singlerequest.get(`browse/featured-playlists?country=${navigator.language.slice(3, 5)}&locale=${navigator.language}&limit=10`)
  }
}
