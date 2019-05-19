
import controllers from '../../api/controllers'

const state = {
  query: '',
  artists: ''
}

const getters = {}

const mutations = {

  SET_SEARCH_QUERY (state, data) {
    state.query = data
  },

  REQUEST_SET_ARTISTS (state, data) {
    state.artists = data.artists
    console.log(state.artists)
  }
}

const actions = {

  requestSetSearchQuery ({commit}, query) {
    commit('SET_SEARCH_QUERY', query)
  },

  requestSetArtists ({commit}, data) {
    commit('REQUEST_SET_ARTISTS', data)
  },

  async getArtists ({commit, dispatch}, query) {
    dispatch('requestSetSearchQuery', query)
    // console.log(query)
    try {
      const response = await controllers.artists.getArtist(query)
      // console.log(response.data)
      dispatch('requestSetArtists', response.data)
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
