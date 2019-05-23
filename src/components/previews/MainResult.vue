<template>
  <div v-if="artists" >
    <div class="mainartist" v-on:click="goTo(artists.items[0].id)">
      <p>Most popular artist</p>
      <img class="mainartist__img" :src="artists.items[0].images[0].url" :alt='artists.items[0].name' />
      <p class="mainartist__name">{{artists.items[0].name}}</p>
    </div>
  </div>
</template>

<script>

import {
  mapActions,
  mapState
} from 'vuex'
import Artist from '../artist/Artist'

export default {
  name: 'MainResult',
  components: {Artist},
  computed: {
    ...mapState('artists', [
      'artists'
    ])
  },
  methods: {
    ...mapActions({
      getArtistById: 'artists/getArtistById',
      getTopTracks: 'artists/getTopTracksByArtist',
      getRelated: 'artists/getRelatedArtists'
    }),

    goTo (id) {
      this.getArtistById(id)
      this.getTopTracks(id)
      this.getRelated(id)
      this.$router.push({name: 'artistinfo', params: {query: id}})
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/artist"
  @import "../../styles/components/previews"
</style>
