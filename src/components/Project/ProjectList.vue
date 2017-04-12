<template>
  <div>
    <input type="search" placeholder="Search" v-model="search">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Customer</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :class="{ inactive: project.status === 'Inactive' }" @click="rowClicked">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>{{ project.customer.name }}</td>
          <td>{{ project.price }}</td>
          <td>{{ project.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        projects: [
          { id: 1, name: 'PJM', customer: { name: 'Erik Vanderlei' }, price: 2000.00, status: 'Active' },
          { id: 2, name: 'SalesCity', customer: { name: 'Erik Fernandes' }, price: 3500.00, status: 'Inactive' }
        ],
        search: ''
      }
    },
    methods: {
      rowClicked () {
        console.log('Row clicked')
      }
    }
  }
</script>

<style lang="scss">

</style>
