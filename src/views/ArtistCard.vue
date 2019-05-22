<template>
    <div class="wrapper-artiscard fadeInAnimated" :key="artist">
      <artist-header :artist="artist"></artist-header>
      <div>
        <section class="artistcard-info">
          <article class="artistcard-info-tracks" >
            <h1 class="artistcard-info-tracks__title">Most popular songs</h1>
            <hr>
            <section class="artistcard-info-tracks__headers" v-if="!isMobile">
              <p>Title</p>
              <p>Artist</p>
              <p>Album</p>
              <p>Duration</p>
              <p>Popularity</p>
            </section>
            <section class="artistcard-info-tracks__headers" v-else>
              <p>Title</p>
              <p>Artist</p>
              <p>Album</p>
            </section>
            <hr>
            <track-entry v-for="(track, index) in topTracks"
                         :key="index"
                         :title="track.name"
                         :artists="track.artists"
                         :album="track.album.name"
                         :duration="track.duration_ms"
                         :popularity="track.popularity"/>
          </article>
          <article class="artistcard-info__related">
            <h1 class="artistcard-info-tracks__title">Related artists</h1>
            <hr>
            <artist-related aria-live="polite"  :related="related"/>
          </article>
        </section>
      </div>
    </div>
</template>

<script>
import ArtistHeader from '../components/artist/ArtistHeader'
import TrackEntry from '../components/TrackEntry'
import {
  mapState
} from 'vuex'
import ArtistRelated from '../components/artist/ArtistRelated'

export default {
  name: 'ArtistCard',
  components: {ArtistRelated, TrackEntry, ArtistHeader},
  computed: {
    ...mapState('artists', [
      'artist',
      'topTracks',
      'related'
    ])
  },
  methods: {
    isMobile () {
      return window.innerWidth < 640
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../styles/components/artist.scss"
</style>
