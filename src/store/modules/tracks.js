import controllers from '../../api/controllers'

const state = {
  query: '',
  tracks: ''
}

const getters = {}

const mutations = {

  REQUEST_SET_TRACKS (state, data) {
    state.tracks = data.tracks
  }
}

const actions = {

  requestSetTracksSuccess ({commit}, data) {
    commit('REQUEST_SET_TRACKS', data)
  },

  async getTracks ({commit, dispatch}, query) {
    try {
      const response = await controllers.tracks.getTracks(query)
      dispatch('requestSetTracksSuccess', response.data)
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
