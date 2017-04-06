<template>
  <div class="logout">
    <div class="panel">
      <h3 class="panel-title">Are you sure, you want to logout?</h3>
      <p class="panel-description">The logout will disconnect you from the system!</p>
      <div class="button-group">
        <button class="button button-highlight">No</button>
        <button class="button button-error">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .logout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .panel {
    padding: 2em;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 0 20px rgba(#243348, .3);
  }
  .button-group {
    margin-bottom: 0;
    display: flex;
    justify-content: flex-end;
  }
  .button {
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
  .panel-title {
    color: #243348;
  }
  .panel-description {
    color: #8287A1;
    margin-top: .7em;
  }
</style>
