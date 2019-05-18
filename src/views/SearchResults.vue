<template>
  <div>
    <main-result/>

    <div class="previews">
      <tracks-preview :tracks="getTracks()"/>
      <albums-preview :albums="getAlbums()"/>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import TracksPreview from '../components/previews/TracksPreview'
import MainResult from '../components/previews/MainResult'
import AlbumsPreview from '../components/previews/AlbumsPreview'

export default {
  name: 'SearchResults',
  components: {AlbumsPreview, TracksPreview, MainResult},
  computed: {
    ...mapState('tracks', [
      'tracks'
    ]),
    ...mapState('albums', [
      'albums'
    ])
  },
  methods: {
    getTracks () {
      return this.tracks && this.tracks.items
        ? Object.keys(this.tracks.items)
          .slice(0, 4)
          .map(key => ({...this.tracks.items[key]}))
        : []
    },
    getAlbums () {
      return this.albums && this.albums.items
        ? Object.keys(this.albums.items)
          .slice(0, 4)
          .map(key => ({...this.albums.items[key]}))
        : []
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../styles/components/searchresults.scss'
</style>
