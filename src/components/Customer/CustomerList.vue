<template>
  <div>
    <input type="search" placeholder="Search" v-model="search">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Projects</th>
          <th>Status</th>
          <th>Debtor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :class="{ inactive: customer.status === 'Inactive', error: customer.debtor === 'Yes' }" @click="rowClicked">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.projects.length }}</td>
          <td>{{ customer.status }}</td>
          <td>{{ customer.debtor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        customers: [
          { id: 1, name: 'Erik Vanderlei', email: 'erik@erikprogramador.com', projects: [{id: 1}, {id: 2}, {id: 3}], status: 'Active', debtor: 'No' },
          { id: 2, name: 'Erik Fernandes', email: 'fernandes@erikprogramador.com', projects: [{id: 1}, {id: 2}], status: 'Inactive', debtor: 'Yes' },
          { id: 3, name: 'Vanderlei Fernandes', email: 'vfernandes@erikprogramador.com', projects: [{id: 1}], status: 'Inactive', debtor: 'No' }
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
