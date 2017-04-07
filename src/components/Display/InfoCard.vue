<template>
  <div class="info-card">
    <slot></slot>
    <div class="card-info">
      <h3>{{ value }}</h3>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'value']
  }
</script>

<style lang="scss" scoped>
  .info-card {
    width: 22%;
    background: #ffffff;
    padding: 1.2em 1em;
    border-radius: 3px;
    box-shadow: 0 5px 10px rgba(#243348, .2);
    display: flex;
    color: #243348;
  }
  .card-info {
    margin-left: 1em;
  }
</style>
