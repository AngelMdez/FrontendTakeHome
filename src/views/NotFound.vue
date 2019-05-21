<template>
    <div class="notfound">
      <p class="notfound__message">Ahhhhhh! We weren't able to find your search. Take a look at our BEST PLAYLISTS</p>
      <div class="notfound-recommendations slideInDownAnimated">
        <recommendation v-for="(playlist, index) in playlists.items"
                        :key="index"
                        :image="playlist.images[0].url"
                        :name="playlist.name"
                        :url="playlist.external_urls.spotify"/>
      </div>
    </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
import Recommendation from '../components/Recommendation'

export default {
  name: 'NotFound',
  components: {Recommendation},
  computed: {
    ...mapState('playlists', [
      'playlists'
    ])
  },
  methods: {
    ...mapActions({
      getRecommendations: 'playlists/getPlaylists'
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
