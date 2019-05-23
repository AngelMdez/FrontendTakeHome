<template>
  <div class="app-layout">
    <header class="app-layout__header">
      <searchbox/>
    </header>
    <section class="app-layout-scroll">
      <router-view></router-view >
    </section>
  </div>
</template>

<script>
import searchbox from '../SearchBox'
import NoRecentSearch from '../../views/NoRecentSearch'

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
