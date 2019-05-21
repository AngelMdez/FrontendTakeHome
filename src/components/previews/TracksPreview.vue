<template>
  <div class="wrapper"  v-if="tracks[0]">
    <div class="wrapper-title">
      <h3>Tracks</h3>
      <p v-on:click="goTo()">Show more...</p>
    </div>
    <hr>
    <div class="trackspreview" >
      <a :href="item.external_urls.spotify" target="_blank" v-for="(item, index) in tracks"
         :key="index">
        <div class="trackspreview-entry"  >
            <img class="trackspreview-entry__img" :src="item.album.images[0].url" :alt="item.name"/>
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
  name: 'TracksPreview',
  props: {
    tracks: {
      type: Array,
      required: true
    }
  },
  methods: {
    goTo () {
      this.$router.replace({name: 'tracks'})
    }
  }
}

</script>

<style scoped lang="sass">
  @import "../../styles/components/trackspreview"
</style>
