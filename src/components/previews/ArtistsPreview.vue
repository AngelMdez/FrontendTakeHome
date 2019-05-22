<template >
  <transition name="slideInDownAnimated">
  <div class="wrapper" v-if="artists[0]">
    <div class="wrapper-title">
      <h3>Artists</h3>
      <p>Show more...</p>
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
  </transition>
</template>

<script>
import {
  mapActions
} from 'vuex'
import Artist from '../Artist'

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

    goTo (id) {
      this.getArtistById(id)
      this.getTopTracks(id)
      this.getRelated(id)
      this.$router.replace({name: 'artistinfo', params: {query: id}})
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/artistpreview.scss"
  @import "../../styles/components/trackspreview"
</style>
