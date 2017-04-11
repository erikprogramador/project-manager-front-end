<template>
  <form>
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
      <label for="type">
        <img class="opacity-label" src="../../assets/links/type.svg" alt="Type">
      </label>
      <select id="type" v-model="type">
        <option value="" disabled>User type</option>
        <option value="1">Administrator</option>
        <option value="2">Customer</option>
      </select>
    </fieldset>
    <span class="input-error">The type field is required!</span>

    <fieldset class="form-group form-group-check">
      <img class="opacity-label" src="../../assets/links/checked.svg" alt="Status Active" v-show="status">
      <img class="opacity-label" src="../../assets/links/unchecked.svg" alt="Status Inactive" v-show="!status">
      <input type="checkbox" id="status" v-model="status">
      <label for="status">
        Active
      </label>
    </fieldset>
    <span class="input-error">The status field is required!</span>

    <div class="form-group">
      <button type="submit" class="button" v-show="!isUpdate">Create</button>
      <button type="submit" class="button button-highlight" v-show="isUpdate">Update</button>
      <button type="reset" class="button button-error">Cancel</button>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        isUpdate: false,
        password: '',
        username: '',
        type: '',
        status: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  input, select {
    width: 92%;
  }
</style>
