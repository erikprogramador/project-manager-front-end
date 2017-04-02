<template>
  <div>
    <navigation />
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Navigation from './components/Partials/Navigation.vue';
  export default {
    components: { Navigation }
  }
</script>

<style lang="scss" src="./main.scss"></style>
