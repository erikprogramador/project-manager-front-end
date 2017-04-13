<template>
  <main class="customers">
    <h1 class="page-header">Customers</h1>
    <button class="button button-float button-top-right" @click="toggleNewCustomerModal">
      <img src="../../assets/links/light-plus.svg" alt="Add Project">
    </button>
    <modal :visible="newCustomerModal" @closeModal="toggleNewCustomerModal">
      <h3 slot="header">Modal</h3>
      <form>
        <customer-create />
      </form>
      <footer slot="footer">
        <button class="button button-error" @click="toggleNewCustomerModal">Cancelar</button>
        <button class="button button-highlight">Adicionar</button>
      </footer>
    </modal>
    <div class="panel-container">
      <panel :fullWidth="true">
        <h3 slot="header">All Customers</h3>
        <customer-list />
      </panel>
    </div>
  </main>
</template>

<script>
  import Panel from '../Display/Panel.vue'
  import Modal from '../Display/Modal.vue'
  import CustomerList from './CustomerList.vue'
  import CustomerCreate from './CustomerCreate.vue'
  export default {
    components: { Panel, Modal, CustomerList, CustomerCreate },
    data () {
      return {
        newCustomerModal: false
      }
    },
    methods: {
      toggleNewCustomerModal () {
        this.newCustomerModal = !this.newCustomerModal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customer {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
</style>
