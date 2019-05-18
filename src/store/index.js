import token from './modules/token'
import artists from './modules/artists'
import tracks from './modules/tracks'
import albums from './modules/albums'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    token,
    artists,
    tracks,
    albums
  }
})
