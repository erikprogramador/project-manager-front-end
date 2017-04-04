<template>
  <nav>
    <ul>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/dashboard">Dashobard</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .router-link-active {
    color: #243348;
  }
</style>
