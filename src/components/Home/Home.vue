<template>
  <main class="home">
    <h1 class="title">PJM - Project Manager</h1>
    <h2 class="subtitle">Organize yours clients</h2>
    <div class="button-group">
      <router-link to="/login" class="button button-cta">Login</router-link>
      <router-link to="/register" class="button button-highlight button-cta">Register</router-link>
    </div>
  </main>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title, .subtitle {
    color: #243348;
  }
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    letter-spacing: 5px;
    margin: .2em 0 .5em;
  }
  .button {
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
</style>
