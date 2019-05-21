<template >
  <div class="wrapper"  v-if="albums[0]">
    <div class="wrapper-title">
      <h3>Albums</h3>
      <p>Show more...</p>
    </div>
    <hr>
    <div class="trackspreview">
      <a :href="item.external_urls.spotify" target="_blank" v-for="(item, index) in albums"
         :key="index">
        <div class="trackspreview-entry"  >
          <img class="trackspreview-entry__img" :src="item.images[0].url" :alt="item.name"/>
          <div class="trackspreview-entry-info">
            <p class="trackspreview-entry-info__title">{{item.name}}</p>
            <p class="trackspreview-entry-info__artist">{{item.artists[0].name}}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AlbumsPreview',
  props: {
    albums: {
      type: Array,
      required: true
    }
  }
}

</script>

<style scoped lang="sass">
  @import "../../styles/components/trackspreview"
</style>
