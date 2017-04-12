<template>
  <div class="modal" :class="{ 'hidden': !visible, 'visible': visible }" @click="$emit('closeModal')">
    <div class="modal-container" @click="preventClick">
      <button class="close" @click="$emit('closeModal')">
        <img src="../../assets/links/close-white.svg" alt="Close Modal">
      </button>
      <header class="modal-header">
        <slot name="header"></slot>
      </header>
      <section class="modal-body">
        <slot></slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['visible'],
    methods: {
      preventClick (event) {
        event.stopPropagation()
      }
    }
  }
</script>

<style lang="scss">
  .hidden {
    opacity: 0;
    transform: translateY(100%);
    transition: transform 400ms ease-in-out, opacity 200ms ease-in-out;
    pointer-events: none;
  }
  .visible {
    pointer-events: auto;
    transition: transform 400ms ease-in-out, opacity 200ms ease-in-out;
  }
  .modal {
    position: fixed;
    background-color: rgba(0, 0, 0, .9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-container {
    background-color: #ffffff;
    width: 90%;
    max-width: 600px;
    border-radius: 3px;
    position: relative;
  }
  .modal-body {
    padding: 1em;
  }
  .modal-header {
    padding: 1em;
    border-bottom: 1px solid #fafafa;
  }
  .modal-footer {
    padding: 1em;
    border-top: 1px solid #fafafa;
    text-align: right;
  }
  .close {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: -30px;
    right: -30px;
    transform: scale(1.2);
  }
</style>
