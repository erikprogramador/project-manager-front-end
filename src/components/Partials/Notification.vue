<template>
  <div class="notification-container" :class="{ 'notification-visible': showNotification, 'notification-error': error }">
    <p>{{ message }}</p>
    <button class="close">
      <img class="close-icon" src="../../assets/links/close-white.svg" alt="Close" @click.prevent="close">
    </button>
  </div>
</template>

<script>
  export default {
    // This will change when i start the functional part
    data () {
      return {
        message: '',
        showNotification: false,
        error: false
      }
    },
    methods: {
      close () {
        this.showNotification = false
        setTimeout(() => {
          this.message = ''
          this.error = false
        }, 300)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notification-container {
    background-color: #243348; // Learn how to get this from the vars file
    color: #fafafa;
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: .8em 1.2em;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 20px rgba(#243348, .3);
    opacity: 0;
    transform: translateY(110%);
    transition: transform 200ms ease-in-out, opacity 150ms ease-in-out;
  }
  .notification-visible {
    opacity: 1;
    transform: translateX(0);
  }
  .notification-error {
    background: #ff8080;
  }
  .close {
    outline: none;
    border: none;
    background: none;
    color: #8287A1;
    cursor: pointer;
    margin-left: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-icon {
    width: 1.2rem;
  }
</style>
