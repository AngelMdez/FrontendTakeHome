<template>
  <div v-if="artists" >
    <artist
      :id="artists.items[0].id"
      :url="artists.items[0].images[0].url"
            :name="artists.items[0].name"/>
  </div>
</template>

<script>

import {
  mapState
} from 'vuex'
import Artist from '../Artist'

export default {
  name: 'MainResult',
  components: {Artist},
  computed: {
    ...mapState('artists', [
      'artists'
    ])
  },
  methods: {
    /* goTo (id) {
      this.getArtists(id)
      this.$router.replace({name: 'artistinfo', params: {query: id}})
    } */
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/mainresult.scss"
  @import "../../styles/components/trackspreview"
</style>
