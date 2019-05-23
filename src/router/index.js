import Vue from 'vue'
import Router from 'vue-router'
import SearchResults from '@/views/SearchResults'
import NoRecentSearch from '@/views/NoRecentSearch'
import Tracks from '@/views/Tracks'
import ArtistCard from '@/views/ArtistCard'
import Artists from '@/views/Artists'
import NotFound from '@/views/NotFound'

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
    },
    {
      path: 'artistinfo/:query',
      name: 'artistinfo',
      component: ArtistCard
    },
    {
      path: 'notfound',
      name: 'notfound',
      component: NotFound
    },
    {
      path: 'artists',
      name: 'artists',
      component: Artists
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
