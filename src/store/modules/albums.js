import controllers from '../../api/controllers'

const state = {
  query: '',
  albums: ''
}

const getters = {}

const mutations = {

  REQUEST_GET_ALBUMS (state) {
    state.artistsIsLoading = true
  },

  REQUEST_SET_ALBUMS (state, data) {
    state.artistsIsLoading = false
    state.albums = data.albums
    console.log(state.albums)
  }
}

const actions = {
  requestGetAlbums ({commit}) {
    commit('REQUEST_GET_ALBUMS')
  },

  requestSetAlbums ({commit}, data) {
    commit('REQUEST_SET_ALBUMS', data)
  },

  async getAlbums ({commit, dispatch}, query) {
    dispatch('requestGetAlbums')
    try {
      const response = await controllers.albums.getAlbums(query)
      dispatch('requestSetAlbums', response.data)
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
