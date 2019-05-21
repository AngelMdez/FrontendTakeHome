<template>
  <div class="app-layout">
    <div class="app-layout__header">
      <searchbox/>
    </div>
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
  @import "../../styles/global.scss"
  @import "../../styles/basics/layout.scss"
</style>
