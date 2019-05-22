<template>
  <div class="relatedlist-entry" v-on:click="goTo(id)" v-if="url !== ''">
    <img class="relatedlist-entry__img" :src="url" :alt='name'/>
    <p class="relatedlist-entry__name">{{name}}</p>
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
</style>
