import controllers from '../../api/controllers'

const state = {
  query: '',
  tracks: ''
}

const getters = {}

const mutations = {

  REQUEST_GET_TRACKS (state) {
    state.artistsIsLoading = true
  },

  REQUEST_SET_TRACKS (state, data) {
    state.tracks = data.tracks
    console.log(state.tracks)
  }
}

const actions = {
  requestGetTracks ({commit}) {
    commit('REQUEST_GET_TRACKS')
  },

  requestSetTracksSuccess ({commit}, data) {
    commit('REQUEST_SET_TRACKS', data)
  },

  async getTracks ({commit, dispatch}, query) {
    dispatch('requestGetTracks')
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
