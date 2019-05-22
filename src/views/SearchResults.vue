<template>
  <section v-if="existsArtist()" aria-live="polite" aria-label="Search results">
    <article class="previews">
      <transition name="fade">
        <main-result class="fadeInAnimated"  aria-label="main result"/>
      </transition>
        <artist-preview class="fadeInAnimated"  aria-label="most popular artists results" :artists="parseArtists()" :key="artists.items[0].name"/>
    </article>
    <article class="previews">
        <tracks-preview class="fadeInAnimated"  aria-label="most popular tracks results" :tracks="parseTracks()" :key="tracks.items[0].name"/>
        <albums-preview class="fadeInAnimated"  aria-label="most popular albums results"  :albums="parseAlbums()" :key="albums.items[0].name"/>
    </article>
  </section>
  <section class="nosearch" v-else>
    <not-found/>
  </section>
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
      return this.artists && this.artists.items.length > 0
    },
    parseArtists () {
      return this.artists && this.artists.items
        ? Object.keys(this.artists.items)
          .slice(1, 4)
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
