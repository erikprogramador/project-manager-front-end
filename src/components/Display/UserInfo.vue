<template>
  <ul>
    <li class="list-row">
      <h4 class="list-title">Username:</h4>
      <span class="list-info">{{ user.username }}</span>
    </li>
    <li class="list-row">
      <h4 class="list-title">Last Login:</h4>
      <span class="list-info">{{ lastLogin }}</span>
    </li>
    </li>
    <li class="list-row">
      <h4 class="list-title">Permission:</h4>
      <span class="list-info">{{ user.permission }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: 'admin',
          permission: 'Adiministrator'
        },
        lastLogin: '3 days ago'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-row {
    padding: 1em;
  }
  .list-title {
    margin-bottom: .5em;
  }
  .list-info {
    padding-left: .5em;
    font-size: 1.3rem;
    color: lighten(#243348, 20%)
  }
</style>
