<template>
  <form>
    <fieldset class="form-group">
      <label for="name">
        <img class="opacity-label" src="../../assets/links/account-card-details.svg" alt="Name">
      </label>
      <input type="text" id="name" placeholder="Name" v-model="name" required>
    </fieldset>
    <span class="input-error">The name field is required!</span>

    <fieldset class="form-group">
      <label for="email">
        <img class="opacity-label" src="../../assets/links/clipboard-account.svg" alt="Email">
      </label>
      <input type="email" id="email" placeholder="Email" v-model="email" required>
    </fieldset>
    <span class="input-error">The email field is required!</span>

    <fieldset class="form-group form-group-check">
      <img class="opacity-label" src="../../assets/links/checked.svg" alt="Status Active" v-show="status">
      <img class="opacity-label" src="../../assets/links/unchecked.svg" alt="Status Inactive" v-show="!status">
      <input type="checkbox" id="status" v-model="status">
      <label for="status">
        Active
      </label>
    </fieldset>
    <span class="input-error">The status field is required!</span>

    <customer-debtor v-show="isDebtor" />
  </form>
</template>

<script>
  import CustomerDebtor from './CustomerDebtor.vue'
  export default {
    components: { CustomerDebtor },
    data () {
      return {
        isUpdate: false,
        price: '',
        name: '',
        email: '',
        customer: '',
        status: true,
        isDebtor: true
      }
    }
  }
</script>

<style lang="scss">
  input, select {
    width: 92%;
  }
</style>
