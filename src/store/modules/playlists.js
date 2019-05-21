import controllers from '../../api/controllers'

const state = {
  playlists: ''
}

const getters = {}

const mutations = {

  REQUEST_SET_PLAYLISTS (state, data) {
    state.playlists = data.playlists
    console.log(state.playlists)
  }
}

const actions = {

  requestSetPlaylists ({commit}, data) {
    commit('REQUEST_SET_PLAYLISTS', data)
  },

  async getPlaylists ({commit, dispatch}) {
    try {
      const response = await controllers.playlists.getPlaylists()
      dispatch('requestSetPlaylists', response.data)
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
