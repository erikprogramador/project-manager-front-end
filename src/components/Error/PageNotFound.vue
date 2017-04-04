<template>
    <div class="container">
      <h1 class="not-found">404</h1>
      <h2 class="not-found-subtitle">Page not found!</h2>
      <router-link to="/">
        <a class="button">Back to home!</a>
      </router-link>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .not-found {
    font-size: 10rem;
    color: #243348;
  }
  .not-found-subtitle {
    font-size: 1.5rem;
    letter-spacing: 5px;
    color: #243348;
    margin: .3em 0 1.5em;
  }
</style>
