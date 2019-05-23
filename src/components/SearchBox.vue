<template>
  <div class="outer">
    <img aria-label="Home" aria-live="off" src="@/assets/spotify.png" @click="reset()" alt="spotify home icon"/>
    <section class="search">
      <div class="search-inner">
        <i class="material-icons md-24 search-inner__icon">
          search
        </i>
        <input
          class="search-inner__input"
          type="search"
          placeholder="What are you looking for?"
          v-model="query"
          @focus="showRelated()"
          @focusout="focusOut()"
          />
        <input
          class="search-inner__input--suggestion"
          type="search"
          v-bind:value='suggestion'/>
      </div>
      <section class="search-related" aria-live="polite"  v-if="show && suggestion !== '' "  >
        <article class="search-related__option"  v-for="(artist, index) in getRelated()" :key="index" @mousedown="setInputQuery(artist.name)"  >
          <p > {{artist.name}}</p>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

var timeout = null

export default {
  name: 'searchbox',
  computed: {
    ...mapState('artists', [
      'artists'
    ])
  },
  data: () => {
    return {
      suggestion: '',
      query: '',
      show: false
    }
  },
  watch: {
    query: function (newQuery, oldQuery) {
      this.onKeyUp(newQuery)
      this.generateSuggestion(newQuery)
    }
  },
  methods: {
    ...mapActions({
      getArtists: 'artists/getArtists',
      getTracks: 'tracks/getTracks',
      getAlbums: 'albums/getAlbums'
    }),

    focusOut () {
      this.show = false
    },
    reset () {
      this.$router.push({name: 'main'})
      this.query = ''
    },
    generateSuggestion (value) {
      this.suggestion = this.artists.items && this.artists.items[0].name.toUpperCase().startsWith(value.toUpperCase()) ? this.artists.items[0].name.toUpperCase() : ' '
    },
    showRelated () {
      this.show = true
    },
    setInputQuery (selectedQuery) {
      this.show = false
      this.query = selectedQuery
    },
    getRelated () {
      return this.artists && this.artists.items
        ? Object.keys(this.artists.items)
          .slice(0, 4)
          .map(key => ({...this.artists.items[key]}))
        : []
    },
    onKeyUp (value) {
      /* const {
        value
      } = e.target */

      clearTimeout(timeout)
      timeout = setTimeout(function () {
        if (value !== '') {
          // this.store(value)
          this.getArtists(value)
          this.getTracks(value)
          this.getAlbums(value)
          localStorage.setItem('input', value)

          this.$router.push({name: 'search', params: {query: value}})
          /* if (this.artists && this.artists.items) {
            // this.$router.push({name: 'search', params: {query: value}})
          } /!* else {
            this.$router.push({name: 'notfound'})
          } *!/ */
        } else {
          this.suggestion = ''
          this.artist = ''
          this.$router.push({name: 'main'})
        }
      }.bind(this), 250)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../styles/components/searchbox.scss"
</style>
