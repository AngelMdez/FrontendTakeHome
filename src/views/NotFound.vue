<template>
    <section class="notfound" v-if="playlists.items > 0">
      <p class="notfound__message">Ahhhhhh! We weren't able to find your search. Take a look at our BEST PLAYLISTS</p>
      <div aria-live="polite" class="notfound-recommendations slideInDownAnimated">
        <recommendation v-for="(playlist, index) in playlists.items"
                        :key="index"
                        :image="playlist.images[0].url"
                        :name="playlist.name"
                        :url="playlist.external_urls.spotify"/>
      </div>
    </section>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
import Recommendation from '../components/Recommendation'
import {getMore} from '@/mixins/getMore'

export default {
  name: 'NotFound',
  components: {Recommendation},
  computed: {
    ...mapState('playlists', [
      'playlists'
    ])
  },
  mixins: [getMore],
  methods: {
    ...mapActions({
      getRecommendations: 'playlists/getPlaylists',
      getMorePlaylists: 'playlists/getMorePlaylists'
    })
  },
  mounted () {
    this.getRecommendations()
    console.log(this.playlists)
  }
}
</script>

<style scoped lang="sass">
  @import "../styles/components/notfound"
</style>
