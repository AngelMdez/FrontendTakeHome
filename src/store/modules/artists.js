
import controllers from '../../api/controllers'

const state = {
  query: '',
  artists: '',
  artist: '',
  topTracks: '',
  related: '',
  artistLoading: false
}

const getters = {}

const mutations = {

  SET_SEARCH_QUERY (state, data) {
    state.query = data
  },

  SET_SINGLE_ARTIST (state, data) {
    state.artist = data
  },

  REQUEST_LOADING (state) {
    state.artistLoading = true
  },

  REQUEST_FINISHED (state) {
    state.artistLoading = false
  },

  SET_TOP_TRACKS (state, data) {
    state.topTracks = data.tracks
  },

  SET_RELATED_ARTISTS (state, data) {
    state.related = data.artists
  },

  REQUEST_SET_ARTISTS (state, data) {
    state.artists = data.artists
  },
  RESET_ARTISTS (state) {
    state.artists = ''
  }
}

const actions = {

  requestSetSearchQuery ({commit}, query) {
    commit('SET_SEARCH_QUERY', query)
  },

  requestSetArtists ({commit}, data) {
    commit('REQUEST_SET_ARTISTS', data)
  },

  requestSetSingleArtist ({commit}, data) {
    commit('SET_SINGLE_ARTIST', data)
  },

  setArtistTopTracks ({commit}, data) {
    commit('SET_TOP_TRACKS', data)
  },

  setRelatedArtists ({commit}, data) {
    commit('SET_RELATED_ARTISTS', data)
  },
  requestLoading ({commit}) {
    commit('REQUEST_LOADING')
  },
  requestFinished ({commit}) {
    commit('REQUEST_FINISHED')
  },
  resetArtists ({commit}) {
    commit('RESET_ARTISTS')
  },
  async getArtists ({commit, dispatch}, query) {
    dispatch('requestSetSearchQuery', query)
    dispatch('requestLoading')
    // console.log(query)
    try {
      const response = await controllers.artists.getArtist(query)
      // console.log(response.data)
      dispatch('requestSetArtists', response.data)
      dispatch('requestFinished')
    } catch (e) {
      console.log(e)
    }
  },

  async getArtistById ({commit, dispatch}, query) {
    dispatch('requestSetSearchQuery', query)
    // console.log(query)
    try {
      const response = await controllers.artists.getArtistById(query)
      // console.log(response.data)
      dispatch('requestSetSingleArtist', response.data)
    } catch (e) {
      console.log(e)
    }
  },

  async getTopTracksByArtist ({commit, dispatch}, query) {
    try {
      const response = await controllers.artists.getTopTracks(query)
      // console.log(response.data)
      dispatch('setArtistTopTracks', response.data)
    } catch (e) {
      console.log(e)
    }
  },

  async getRelatedArtists ({commit, dispatch}, query) {
    try {
      const response = await controllers.artists.getRelated(query)
      // console.log(response.data)
      dispatch('setRelatedArtists', response.data)
    } catch (e) {
      console.log(e)
    }
  }
}

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default module
