<template>
  <div class="auth-form-container">
    <legend class="auth-form-title"><strong>PJM</strong> Register</legend>
    <form class="auth-form">
      <fieldset class="form-group">
        <label for="username">
          <img class="opacity-label" src="../../assets/links/clipboard-account.svg" alt="Username">
        </label>
        <input type="text" id="username" placeholder="Username" v-model="username" required>
      </fieldset>
      <span class="input-error">The username field is required!</span>

      <fieldset class="form-group">
        <label for="password">
          <img class="opacity-label" src="../../assets/links/lock-reset.svg" alt="Password">
        </label>
        <input type="password" id="password" placeholder="Password" v-model="password" required>
      </fieldset>
      <span class="input-error">The password field is required!</span>

      <fieldset class="form-group">
        <label for="password-confirmation">
          <img class="opacity-label" src="../../assets/links/fingerprint.svg" alt="Password confirmation">
        </label>
        <input type="password" id="password-confirmation" placeholder="Password Confirmation" v-model="passwordConfirmation" required>
      </fieldset>
      <span class="input-error">The confirmation password field is required!</span>

      <div class="form-group">
        <button type="submit" class="button button-full">Register</button>
      </div>
      <router-link to="/login">I have got a login!</router-link>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        passwordConfirmation: ''
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>
