<template>
    <div class="notfound">
      <p class="notfound__message">We could not find any {{message}} :( </p>
      <p class="notfound__advice">Check that all of the words are correctly spelled or try with another {{message}}! </p>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    message: {
      required: true
    }
  }
}
</script>

<style lang="sass">

  .wrapper
    display: flex
    align-items: center
    justify-content: center

    &__message
      font-size: 18px
      font-weight: bold
</style>
