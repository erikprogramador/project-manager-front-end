<template>
  <div class="info-error">
    <h3 class="info-title-error">This custumer has debits!</h3>
    <list-info :info="errors" />
  </div>
</template>

<script>
  import ListInfo from '../Display/ListInfo.vue'
  export default {
    components: { ListInfo },
    data () {
      return {
        errors: [
          { link: '/', text: 'User don`t pay the project!' },
          { link: '/customer', text: 'User don`t pay the second project!' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .info-error {
    background-color: rgba(#ff8080, .4);
    padding: 1em;
    border-radius: 3px;
    margin: 1em 0 .1em;
  }
</style>
