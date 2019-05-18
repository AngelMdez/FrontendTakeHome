import auth from '../../api/auth'

const state = {
  accessToken: ''
}

const getters = {
  getToken: state => state.accessToken
}

const mutations = {
  SET_TOKEN (state, token) {
    state.accessToken = token
  }

}

const actions = {
  async refreshToken ({commit, dispatch}, token) {
    try {
      console.log('REFRESCANDO')
      const response = await auth.getToken()
      dispatch('setAccessToken', response.token)

      return response
    } catch (e) {
      console.log(e)
    }
  },

  setAccessToken ({commit}, token) {
    commit('SET_TOKEN', token)
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
