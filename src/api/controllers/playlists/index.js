import singlerequest from '../singlerequest'

export default {
  getPlaylists (offset) {
    return singlerequest.get(`browse/featured-playlists?country=${navigator.language.slice(3, 5)}&locale=${navigator.language}&limit=10`)
  },
  getNewReleases () {
    return singlerequest.get(`browse/new-releases?country=${navigator.language.slice(3, 5)}&limit=10`)
  }
}
