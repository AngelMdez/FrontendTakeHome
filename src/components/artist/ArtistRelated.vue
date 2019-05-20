<template>
  <div class="relatedlist">
    <div class="relatedlist-entry" v-for="(artist, index) in related.slice(0,5)"
         :key="index">
      <img class="relatedlist-entry__img" :src="artist.images[0].url" />
      <p class="relatedlist-entry__name">{{artist.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistRelated',
  props: {
    related: {
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../../styles/components/relatedartists'
</style>
