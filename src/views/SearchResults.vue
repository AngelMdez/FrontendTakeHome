<template>
  <div v-if="existsArtist">
    <div class="previews">
      <main-result class="slideInDownAnimated"/>
      <artist-preview class="slideInDownAnimated" :artists="parseArtists()"/>
    </div>
    <div class="previews">
      <tracks-preview class="slideInDownAnimated" :tracks="parseTracks()"/>
      <albums-preview class="slideInDownAnimated" :albums="parseAlbums()"/>
    </div>
  </div>
  <div class="nosearch" v-else>
    <!--<img src="@/assets/sad.png" class="nosearch__icon"/>
    &lt;!&ndash;<i class="material-icons md-48 md-light ">
      search
    </i>&ndash;&gt;
    <h1 class="nosearch__title">Our monkeys weren't able to find your search :(</h1>
    <h4 class="nosearch__subtitle">Check the spelling or try again with another word!</h4>-->
    <not-found/>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import TracksPreview from '../components/previews/TracksPreview'
import MainResult from '../components/previews/MainResult'
import AlbumsPreview from '../components/previews/AlbumsPreview'
import ArtistPreview from '../components/previews/ArtistsPreview'
import NotFound from './NotFound'

export default {
  name: 'SearchResults',
  components: {NotFound, AlbumsPreview, TracksPreview, MainResult, ArtistPreview},
  computed: {
    ...mapState('tracks', [
      'tracks'
    ]),
    ...mapState('albums', [
      'albums'
    ]),
    ...mapState('artists', [
      'artists'
    ])
  },
  data: () => {
    return {
      suggestion: '',
      query: '',
      animated: false
    }
  },
  methods: {
    existsArtist () {
      return this.artists
    },
    parseArtists () {
      return this.artists && this.artists.items
        ? Object.keys(this.artists.items)
          .slice(1, 5)
          .map(key => ({...this.artists.items[key]}))
        : []
    },
    parseTracks () {
      return this.tracks && this.tracks.items
        ? Object.keys(this.tracks.items)
          .filter(key => { return this.tracks.items[key].popularity > 50 })
          .slice(0, 4)
          .map(key => ({...this.tracks.items[key]}))
        : []
    },
    parseAlbums () {
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
  @import '../styles/components/norecentsearch.scss'
</style>
