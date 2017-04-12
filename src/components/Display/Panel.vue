<template>
  <div class="panel" :class="{ 'full-width': fullWidth }">
    <header class="panel-header"><slot name="header"></slot></header>
    <section class="panel-body"><slot></slot></section>
  </div>
</template>

<script>
  export default {
    props: ['fullWidth']
  }
</script>

<style lang="scss" scoped>
  .panel {
    background: #ffffff;
    border-radius: 3px;
    width: 48%;
    max-width: 600px;
    box-shadow: 0 5px 10px rgba(#243348, .2);
    &.full-width {
      width: 100%;
      max-width: 100%;
    }
  }
  .panel-header {
    padding: 1.5em 2em 1em;
    border-bottom: 1px solid #fafafa;
  }
  .panel-body {
    padding: 2em;
  }
</style>
