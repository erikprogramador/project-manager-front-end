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
    <section>
      <h2>Figure out</h2>
      <ul>
        <li>User graphs</li>
        <li>Display pending payments</li>
      </ul>
    </section>
  </main>
</template>

<script>
  import InfoCard from '../Display/InfoCard.vue'
  export default {
    components: { InfoCard }
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
