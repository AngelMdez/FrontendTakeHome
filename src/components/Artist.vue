<template>
  <div class="mainartist" v-on:click="goTo()">
    <p>Most popular artist</p>
    <img class="mainartist__img" :src="url" />
    <p class="mainartist__name">{{name}}</p>
  </div>
</template>

<script>

import {
  mapActions
} from 'vuex'

export default {
  name: 'Artist',
  props: {
    id: {
      required: true
    },
    url: {
      required: true
    },
    name: {
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
      this.$router.push({name: 'artistinfo', params: {query: this.id}})
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../styles/components/artist.scss"
</style>
