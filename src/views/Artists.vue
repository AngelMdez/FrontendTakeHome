<template>
  <div class="tablewrapper" v-if="existsArtist () ">
    <div aria-live="polite" class="table">
      <h1>Showing related artists to <strong>{{currentInput() | uppercase}}</strong></h1>
      <hr>
      <div class="wrapper-artists">
        <artist v-for="(artist, index) in artists.items"
                :key="index"
                :id="artist.id"
                :url="getUrl(artist)"
                :name="artist.name"/>
      </div>
  </div>
  </div>
</template>
<script>

import {
  mapState
} from 'vuex'
import Artist from '../components/artist/Artist'
export default {
  name: 'Artists',
  components: {Artist},
  computed: {
    ...mapState('artists', [
      'artists'
    ])
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  },
  methods: {
    currentInput () {
      return localStorage.getItem('input')
    },
    existsArtist () {
      return this.artists && this.artists.items.length > 0
    },
    getUrl (artist) {
      var url = artist.images.length > 0 ? artist.images[0].url : ''
      return url
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../styles/components/table'
</style>
