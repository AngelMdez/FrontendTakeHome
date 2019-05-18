<template>
  <div>
    <div class="search">
      <i class="material-icons md-24 ">
        search
      </i>
      <input
        @keyup="onKeyUp"
        type="search"
        placeholder="Search"
         id="inpt_search"/>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'

import mainresult from './previews/MainResult'

export default {
  name: 'searchbox',

  components: {
    mainresult
  },

  methods: {
    ...mapActions({
      getArtists: 'artists/getArtists',
      getTracks: 'tracks/getTracks',
      getAlbums: 'albums/getAlbums'
    }),

    onKeyUp (e) {
      const {
        value
      } = e.target
      if (value !== '') {
        this.$router.replace({name: 'search', params: {query: value}})
        this.getArtists(value)
        this.getTracks(value)
        this.getAlbums(value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/components/searchbox.scss"
</style>
