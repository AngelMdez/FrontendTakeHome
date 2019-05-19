<template>
  <div class="app-layout">
    <searchbox/>
    <div class="app-layout-scroll">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import searchbox from '../SearchBox'
import NoRecentSearch from '../NoRecentSearch'

export default {
  name: 'AppLayout',
  components: {
    searchbox,
    NoRecentSearch
  }
}
</script>

<style scoped lang="sass">
  @import "../../styles/basics/layout.scss"
</style>
