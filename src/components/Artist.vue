<template>
  <div class="mainartist">
    <p>Most popular artist</p>
    <img class="mainartist__img" :src="url" />
    <p class="mainartist__name">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    url: {
      required: true
    },
    name: {
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../styles/components/artist.scss"
</style>
