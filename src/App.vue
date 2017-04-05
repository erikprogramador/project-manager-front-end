<template>
  <div class="main">
    <navigation />
    <div class="router-container">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
    <notification />
  </div>
</template>

<script>
  import Navigation from './components/Partials/Navigation.vue';
  import Notification from './components/Partials/Notification.vue';
  export default {
    components: { Navigation, Notification }
  }
</script>

<style lang="scss" src="./main.scss"></style>
