<template>
  <div class="outer">
    <img src="@/assets/spotify.png" @click="$router.push({name: 'main'})"/>
    <!--<i class="material-icons md-36 md-light " @click="$router.go(-1)">
      navigate_before
    </i>
    <i class="material-icons md-36 md-light" @click="$router.go(1)">
      navigate_next
    </i>-->
    <div class="search">
      <div class="search-inner">
        <i class="material-icons md-24 search-inner__icon">
          search
        </i>
        <input
          class="search-inner__input"
          type="search"
          placeholder="What are you looking for?"
          v-model="query"
          @focus="showRelated()"/>
        <input
          class="search-inner__input--suggestion"
          type="search"
          v-bind:value='suggestion'/>
      </div>
      <div class="search-related">
        <div class="search-related__option" >
          <p v-if="show && suggestion !== '' " v-for="(artist, index) in getRelated()" :key="index" @click="setInputQuery(artist.name)"> {{artist.name}}</p>
        </div>
      </div>
    </div>
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
    }
  },
  methods: {
    ...mapActions({
      getArtists: 'artists/getArtists',
      getTracks: 'tracks/getTracks',
      getAlbums: 'albums/getAlbums'
    }),

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
          if (!this.artists) {
            this.$router.push({name: 'notfound'})
          }
          this.suggestion = this.artists && this.artists.items[0].name.toUpperCase().startsWith(value.toUpperCase()) ? this.artists.items[0].name.toUpperCase() : ' '
          this.getTracks(value)
          this.getAlbums(value)
          localStorage.setItem('input', value)
          this.$router.push({name: 'search', params: {query: value}})
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
