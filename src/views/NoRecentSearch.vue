<template>
  <section class="notfound">
    <p class="notfound__message">HEY! Welcome. Check out the <strong>new releases</strong> or search for anything you want!</p>
    <div aria-live="polite" class="notfound-recommendations slideInDownAnimated">
      <recommendation v-for="(playlist, index) in newreleases.items"
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
  name: 'NoRecentSearch',
  components: {Recommendation},
  computed: {
    ...mapState('playlists', [
      'newreleases'
    ])
  },
  mixins: [getMore],
  methods: {
    ...mapActions({
      getNewReleases: 'playlists/getNewReleases'
    }),
    load () {
      if (this.newreleases && this.newreleases.items.length > 0) {
        this.getMore(window.scrollY, this.newreleases.items.length + 1, this.getNewReleases())
      }
    }
  },
  created: function () {
    this.getNewReleases()
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/components/notfound";
</style>
