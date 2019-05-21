<template>
  <a :href="url" target="_blank">
    <div class="playlist">
      <img class="playlist__img" :src="image" />
      <div class="playlist__name">{{name}}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Recommendation',
  props: {
    image: {
      required: true
    },
    name: {
      required: true
    },
    url: {
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  @import "../styles/components/notfound"
</style>
