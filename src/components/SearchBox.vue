<template>
  <div class="search">
    <div class="search-inner">
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

var timeout = null
export default {
  name: 'searchbox',
  methods: {
    ...mapActions({
      getArtists: 'artists/getArtists',
      getTracks: 'tracks/getTracks',
      getAlbums: 'albums/getAlbums'
    }),

    onKeyUp (e) {
      clearTimeout(timeout)

      const {
        value
      } = e.target

      timeout = setTimeout(function () {
        if (value !== '') {
          // this.store(value)
          this.getArtists(value)
          this.getTracks(value)
          this.getAlbums(value)
          localStorage.setItem('input', value)
          this.$router.replace({name: 'search', params: {query: value}})
        }
      }.bind(this), 250)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/components/searchbox.scss"
</style>
