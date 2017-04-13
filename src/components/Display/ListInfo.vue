<template>
  <ul class="list-info">
    <router-link v-for="(item, key) in info" tag="li" :to="item.link" key="key">
      <a>{{ item.text }}</a>
    </router-link>
  </ul>
</template>

<script>
  export default {
    props: ['info', 'isError']
  }
</script>

<style lang="scss">
  .list-info li {
    margin: 1em 0 0;
  }
</style>
