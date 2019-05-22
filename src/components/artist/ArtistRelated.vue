<template>
  <section class="relatedlist">
    <article  v-for="(artist, index) in related.slice(0,5)"
         :key="index">
      <artist
        :id="artist.id"
        :url="artist.images[0].url"
        :name="artist.name"/>
    </article>
  </section>
</template>

<script>
import Artist from '../Artist'

export default {
  name: 'ArtistRelated',
  components: {Artist},
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
