<template>
  <div class="wrapper">
    <h3>Tracks</h3>
    <hr>
    <div class="trackspreview" v-if="tracks">
      <div class="trackspreview-entry"  v-for="(item, index) in tracks"
           :key="index">
        <img class="trackspreview-entry__img" :src="item.album.images[0].url" :alt="item.name"/>
        <div class="trackspreview-entry-info">
          <p class="trackspreview-entry-info__title">{{item.name}}</p>
          <p class="trackspreview-entry-info__artist">{{item.artists[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TracksPreview',
  props: {
    tracks: {
      type: Array,
      required: true
    }
  }
}

</script>

<style scoped lang="sass">
  @import "../../styles/components/trackspreview"
</style>
