<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <app-layout/>
  </div>
</template>

<script>
import AppLayout from './components/layouts/MainLayout'

export default {
  name: 'App',
  components: {
    AppLayout
  }
}
</script>

<style>
  @import "./styles/global.scss";
</style>
