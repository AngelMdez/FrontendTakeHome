import Vue from 'vue'
import Router from 'vue-router'
import SearchResults from '@/views/SearchResults'
import MainLayout from '@/components/layouts/MainLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout
    },
    {
      path: 'search/:query',
      name: 'search',
      component: SearchResults
    }
  ]
})
