<template>
  <form>
    <fieldset class="form-group">
      <label for="name">
        <img class="opacity-label" src="../../assets/links/projector-screen.svg" alt="Name">
      </label>
      <input type="text" id="name" placeholder="Name" v-model="name" required>
    </fieldset>
    <span class="input-error">The name field is required!</span>

    <fieldset class="form-group">
      <label for="price">
        <img class="opacity-label" src="../../assets/links/cash.svg" alt="Price">
      </label>
      <input type="text" id="price" placeholder="Price" v-model="price" required>
    </fieldset>
    <span class="input-error">The price field is required!</span>

    <fieldset class="form-group">
      <label for="customer">
        <img class="opacity-label" src="../../assets/links/type.svg" alt="Type">
      </label>
      <select id="customer" v-model="customer">
        <option value="" disabled>Select a customer</option>
        <option value="1">Erik Vanderlei</option>
        <option value="2">Erik Fernandes</option>
      </select>
    </fieldset>
    <span class="input-error">The customer field is required!</span>

    <fieldset class="form-group form-group-check">
      <img class="opacity-label" src="../../assets/links/checked.svg" alt="Status Active" v-show="status">
      <img class="opacity-label" src="../../assets/links/unchecked.svg" alt="Status Inactive" v-show="!status">
      <input type="checkbox" id="status" v-model="status">
      <label for="status">
        Active
      </label>
    </fieldset>
    <span class="input-error">The status field is required!</span>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        isUpdate: false,
        price: '',
        name: '',
        customer: '',
        status: true
      }
    }
  }
</script>

<style lang="scss">
  input, select {
    width: 92%;
  }
</style>
