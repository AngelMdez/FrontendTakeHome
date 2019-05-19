import Vue from 'vue'
import Router from 'vue-router'
import SearchResults from '@/views/SearchResults'
import NoRecentSearch from '@/components/NoRecentSearch'
import Tracks from '@/views/Tracks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: NoRecentSearch
    },
    {
      path: 'search/:query',
      name: 'search',
      component: SearchResults
    },
    {
      path: '/list/tracks',
      name: 'tracks',
      component: Tracks
    }
  ]
})
