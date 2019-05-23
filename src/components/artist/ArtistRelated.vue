<template>
  <section class="relatedlist">
    <article  v-for="(artist, index) in sliceRelated()"
         :key="index">
      <artist
        :id="artist.id"
        :url="artist.images[0].url"
        :name="artist.name"/>
    </article>
  </section>
</template>

<script>
import Artist from './Artist'

export default {
  name: 'ArtistRelated',
  components: {Artist},
  props: {
    related: {
      required: true
    }
  },
  methods: {
    sliceRelated () {
      return window.innerWidth < 640 ? this.related.slice(0, 3) : this.related.slice(0, 5)
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../../styles/components/artist'
</style>
