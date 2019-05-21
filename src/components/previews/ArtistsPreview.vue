<template >
  <transition name="slideInDownAnimated">
  <div class="wrapper" v-if="artists[0]">
    <div class="wrapper-title">
      <h3>Artists</h3>
      <p>Show more...</p>
    </div>
    <hr>
    <div class="wrapper-artists">
      <div class="mainartist" v-for="(artist, index) in artists"
           :key="index"  v-on:click="goTo()">
        <img class="mainartist__img" :src="artist.images[0].url" />
        <p class="mainartist__name">{{artist.name}}</p>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  name: 'ArtistPreview',
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
      this.getArtistById(this.id)
      this.getTopTracks(this.id)
      this.getRelated(this.id)
      this.$router.replace({name: 'artistinfo', params: {query: this.id}})
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/artistpreview.scss"
  @import "../../styles/components/trackspreview"
</style>
