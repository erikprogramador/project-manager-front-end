<template>
  <main class="users">
    <h1 class="page-header">Users</h1>
    <div class="panel-container">
      <panel>
        <h3 slot="header">Create User</h3>
        <div>
          <create-user />
        </div>
      </panel>
      <panel>
        <h3 slot="header">List User</h3>
        <div>
          <user-list />
        </div>
      </panel>
    </div>
  </main>
</template>

<script>
  import Panel from '../Display/Panel.vue'
  import CreateUser from './CreateUser.vue'
  import UserList from './UserList.vue'
  export default {
    components: { Panel, CreateUser, UserList }
  }
</script>

<style lang="scss" scoped>
  .users {
    width: 100%;
    min-height: 100vh;
  }
</style>
