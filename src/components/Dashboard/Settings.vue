<template>
  <div class="settings">
    <h1 class="page-header">Settings</h1>
    <div class="panel-container">
      <panel>
        <h3 slot="header">User Information</h3>
        <div>
          <user-info />
        </div>
      </panel>
      <panel>
        <h3 slot="header">Password Changing</h3>
        <div>
          <update-password />
        </div>
      </panel>
    </div>
  </div>
</template>

<script>
  import Panel from '../Display/Panel.vue';
  import UserInfo from '../Display/UserInfo.vue';
  import UpdatePassword from '../Auth/UpdatePassword.vue';
  export default {
    components: { Panel, UserInfo, UpdatePassword }
  }
</script>

<style lang="scss" scoped>
  .panel-container {
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
  }
</style>
