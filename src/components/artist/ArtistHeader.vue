<template>
  <div class="header">
    <div class="header__img">
      <img :src="artist.images[0].url" />
      <p>{{artist.name}}</p>
    </div>
    <div class="header-info">
      <div class="header-info__followers">
        <p>{{artist.followers.total}}</p>
        <span>Followers</span>
      </div>
      <p class="header-info__genres"></p>
      <div class="header-info__popularity">
        <div>{{artist.popularity}}</div>/<div>100</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistHeader',
  props: {
    artist: {
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../../styles/components/artist.scss'
</style>
