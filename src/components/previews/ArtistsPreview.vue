<template >
  <div class="wrapper" v-if="artists[0]" >
    <div class="wrapper-title">
      <h3>Artists</h3>
      <p>Show more...</p>
    </div>
    <hr>
    <div class="wrapper-artists">
      <div class="mainartist" v-for="(artist, index) in artists"
           :key="index">
        <img class="mainartist__img" :src="artist.images[0].url" />
        <p class="mainartist__name">{{artist.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NotFound from '../NotFound'
export default {
  name: 'ArtistPreview',
  components: {NotFound},
  props: {
    artists: {
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/components/artistpreview.scss"
  @import "../../styles/components/trackspreview"
</style>
