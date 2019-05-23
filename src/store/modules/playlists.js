import controllers from '../../api/controllers'

const state = {
  playlists: '',
  newreleases: ''
}

const getters = {}

const mutations = {

  REQUEST_SET_PLAYLISTS (state, data) {
    state.playlists = data.playlists
  },

  REQUEST_SET_RELEASES (state, data) {
    state.newreleases = data.albums
    console.log(state.newreleases)
  }
}

const actions = {

  requestSetPlaylists ({commit}, data) {
    commit('REQUEST_SET_PLAYLISTS', data)
  },
  requestSetReleases ({commit}, data) {
    commit('REQUEST_SET_RELEASES', data)
  },

  async getNewReleases ({commit, dispatch}) {
    try {
      const response = await controllers.playlists.getNewReleases()
      dispatch('requestSetReleases', response.data)
    } catch (e) {
      console.log(e)
    }
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
