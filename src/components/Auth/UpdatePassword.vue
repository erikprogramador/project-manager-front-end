<template>
  <form>
    <fieldset class="form-group">
      <label for="oldPassword">
        <img class="opacity-label" src="../../assets/links/lock-reset.svg" alt="Old Password">
      </label>
      <input type="password" id="oldPassword" placeholder="Old Password" v-model="oldPassword" required>
    </fieldset>
    <span class="input-error">The Old Password field is required!</span>

    <fieldset class="form-group">
      <label for="newPassword">
        <img class="opacity-label" src="../../assets/links/lock-reset.svg" alt="New Password">
      </label>
      <input type="password" id="newPassword" placeholder="New Password" v-model="newPassword" required>
    </fieldset>
    <span class="input-error">The New Password field is required!</span>

    <fieldset class="form-group">
      <label for="confirmPassword">
        <img class="opacity-label" src="../../assets/links/lock-reset.svg" alt="Confirm Password">
      </label>
      <input type="password" id="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword" required>
    </fieldset>
    <span class="input-error">The Confirm Password field is required!</span>

    <div class="form-group">
      <!-- Change this by a vue click -->
      <button type="reset" class="button">Cancel</button>
      <button type="submit" class="button button-highlight">Update</button>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-group {
    display: flex;
    justify-content: flex-end;
  }
  .button-highlight {
    margin-left: 1em;
  }
  input {
    width: 95%;
  }
</style>
