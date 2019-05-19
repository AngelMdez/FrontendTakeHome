<template>
  <div v-if="artists">
    <artist :url="artists.items[0].images[0].url"
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
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/mainresult.scss"
  @import "../../styles/components/trackspreview"
</style>
