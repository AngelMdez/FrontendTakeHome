<template>
  <div class="tablewrapper">
    <div aria-live="polite" class="table" >
      <h1>Showing songs for <strong>{{currentInput() | uppercase}}</strong></h1>
      <div aria-label="table headers" class="table-entry table-entry--title" v-if="!isMobile()">
        <p>Title</p>
        <p>Artist</p>
        <p>Album</p>
        <p>Duration</p>
        <p>Popularity</p>
      </div>
      <div aria-label="table headers" class="table-entry table-entry--title" v-else>
        <p>Title</p>
        <p>Artist</p>
        <p>Album</p>
      </div>
      <hr>
      <a :href="track.external_urls.spotify" target="_blank"  v-for="(track, index) in sliceTracks()"
         :key="index">
      <track-entry
                   :key="index"
                   :title="track.name"
                   :artists="track.artists"
                   :album="track.album.name"
                   :duration="track.duration_ms"
                   :popularity="track.popularity"/>
      </a>
    </div>
  </div>
</template>

<script>
import TrackEntry from '../components/TrackEntry'
import {
  mapState
} from 'vuex'

export default {
  name: 'Tracks',
  components: {TrackEntry},
  computed: {
    ...mapState('tracks', [
      'tracks'
    ])
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  },
  methods: {

    sliceTracks () {
      return this.tracks && this.tracks.items
        ? Object.keys(this.tracks.items)
          .slice(0, 20)
          .map(key => ({...this.tracks.items[key]}))
        : []
    },
    getAllArtists () {
      return this.tracks && this.tracks.items
        ? this.tracks.items.artists
          .map(artist => artist.name)
        : []
    },
    currentInput () {
      return localStorage.getItem('input')
    },
    isMobile () {
      return window.innerWidth < 640
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../styles/components/table'
</style>
