<template>
  <main class="dashboard">
    <h1 class="page-header">Dashboard</h1>
    <!-- That will be dynamic when i get the functional phase -->
    <section class="card-container">
      <info-card title="Projects" value="1">
        <img src="../../assets/links/projector-screen.svg" alt="Projects" title="Projects">
      </info-card>
      <info-card title="Products" value="6">
        <img src="../../assets/links/airplay.svg" alt="Products" title="Products">
      </info-card>
      <info-card title="Paid Products" value="$ 0.00">
        <img src="../../assets/links/check-all.svg" alt="Paid Products" title="Paid Products">
      </info-card>
      <info-card title="Payment Pending" value="$ 0.00">
        <img src="../../assets/links/alert-circle-outline.svg" alt="Payment Pending" title="Payment Pending">
      </info-card>
    </section>
    <div class="divisor"></div>
    <section>
      <div class="panel-container">
        <panel>
          <h3 slot="header">Current projects</h3>
          <simple-table :columns="['id', 'name', 'price']" :items="projects"/>
        </panel>
        <panel>
          <h3 slot="header">Pending Projects</h3>
          <simple-table :columns="['id', 'name', 'price']" :items="projects" :error="true"/>
        </panel>
      </div>
    </div>
    <div class="panel-container">
      <panel>
        <h3 slot="header">Customers</h3>
        <simple-table :columns="['id', 'name', 'returnMoney']" :items="customers"/>
      </panel>
      <panel>
        <h3 slot="header">Debtors Customers</h3>
        <simple-table :columns="['id', 'name', 'returnMoney']" :items="customers" :error="true"/>
      </panel>
    </div>
  </section>
</main>
</template>

<script>
  import InfoCard from '../Display/InfoCard.vue'
  import Panel from '../Display/Panel.vue'
  import SimpleTable from '../Display/SimpleTable.vue'
  export default {
    components: { InfoCard, Panel, SimpleTable },
    data () {
      return {
        projects: [
          { id: 1, name: 'PJM', price: 2000.00 },
          { id: 2, name: 'ErikProgramador', price: 2500.00 },
          { id: 3, name: 'SalesCity', price: 25000.00 }
        ],
        customers: [
          { id: 1, name: 'Erik Vanderlei', returnMoney: 500000.00 },
          { id: 2, name: 'Erik Fernandes', returnMoney: 508000.00 },
          { id: 3, name: 'Vanderlei Fernandes', returnMoney: 480000.00 },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    width: 100%;
    min-height: 100vh;
  }
  .card-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2em 0;
  }
</style>
