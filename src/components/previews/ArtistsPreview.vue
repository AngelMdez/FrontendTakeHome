<template >
  <div class="wrapper" v-if="artists[0]">
    <div class="wrapper-title">
      <h3>Artists</h3>
      <p v-on:click="goTo()">Show more...</p>
    </div>
    <hr>
    <div class="wrapper-artists">
      <artist v-for="(artist, index) in artists"
              :key="index"
              :id="artist.id"
              :url="artist.images[0].url"
              :name="artist.name"/>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'
import Artist from '../artist/Artist'

export default {
  name: 'ArtistPreview',
  components: {Artist},
  props: {
    artists: {
      required: true
    }
  },
  methods: {
    ...mapActions({
      getArtistById: 'artists/getArtistById',
      getTopTracks: 'artists/getTopTracksByArtist',
      getRelated: 'artists/getRelatedArtists'
    }),

    goTo () {
      this.$router.replace({name: 'artists'})
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/artistpreview"
  @import "../../styles/components/previews"
</style>
