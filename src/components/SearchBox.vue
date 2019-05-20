<template>
  <div class="search">
    <div class="search-inner">
      <i class="material-icons md-24 ">
        search
      </i>
      <input
        class="search-inner__input"
        @keydown="onKeyUp"
        type="search"
        placeholder="What are you looking for?"/>
      <input
        class="search-inner__input--suggestion"
        type="search"
        v-bind:value="getSuggestion()"/>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

var vars = {
  index: 0,
  value: ''
}

var timeout = null
export default {
  name: 'searchbox',
  computed: {
    ...mapState('artists', [
      'artists'
    ])
  },
  methods: {
    ...mapActions({
      getArtists: 'artists/getArtists',
      getTracks: 'tracks/getTracks',
      getAlbums: 'albums/getAlbums'
    }),

    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    getSuggestion () {
      return this.artists ? this.artists.items[0].name.toUpperCase() : ' '
    },
    onKeyUp (e) {
      clearTimeout(timeout)

      const {
        value
      } = e.target

      vars.index = value.length
      vars.value = value
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
