<template>
  <div>
    <div class="table-entry" v-if="!isMobile">
      <p>{{title}}</p>
      <p>{{artists | getTrackArtists}}</p>
      <p>{{album}}</p>
      <p>{{duration | toDate}}</p>
      <p>{{popularity}}</p>
    </div>

    <div class="table-entry" v-else>
      <p>{{title}}</p>
      <p>{{artists | getTrackArtists}}</p>
      <p>{{album}}</p>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'TrackEntry',
  props: {
    title: {
      required: true
    },
    artists: {
      required: true
    },
    album: {
      required: true
    },
    duration: {
      required: true
    },
    popularity: {
      required: true
    }
  },
  filters: {
    toDate: function (ms) {
      var minutes = Math.floor(ms / 60000)
      var seconds = ((ms % 60000) / 1000).toFixed(0)
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    },
    getTrackArtists: function (artists) {
      var result = artists[0].name
      artists.slice(1).forEach(artist => {
        result += ', ' + artist.name
      })
      return result
    }
  },
  methods: {
    isMobile () {
      return window.innerWidth < 640
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../styles/components/table'
</style>
