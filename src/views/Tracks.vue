<template>
  <div class="tablewrapper">
    <div class="table">
      <h1>Showing songs for <strong>{{currentInput() | uppercase}}</strong></h1>
      <div class="table-entry table-entry--title">
        <p>Title</p>
        <p>Artist</p>
        <p>Album</p>
        <p>Duration</p>
        <p>Popularity</p>
      </div>
      <hr>
      <track-entry v-for="(track, index) in sliceTracks()"
                   :key="index"
                   :title="track.name"
                   :artist="track.artists[0].name"
                   :album="track.album.name"
                   :duration="track.duration_ms"
                   :popularity="track.popularity"/>
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
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../styles/components/trackentry.scss'
</style>
