<template>
  <div class="mainartist" v-if="artists" >
    <p>Most popular artist</p>
    <img class="mainartist__img" :src="artists.items[0].images[0].url" />
    <p class="mainartist__name">{{artists.items[0].name}}</p>
  </div>
</template>

<script>

import {
  mapState
} from 'vuex'

export default {
  name: 'MainResult',
  computed: {
    ...mapState('artists', [
      'artists'
    ])
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/mainresult.scss"
</style>
