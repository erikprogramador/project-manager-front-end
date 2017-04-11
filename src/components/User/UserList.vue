<template>
  <div>
    <input type="search" placeholder="Search" v-model="search">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :class="{ inactive: user.status === 'Inactive' }" @click="rowClicked">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.type }}</td>
          <td>{{ user.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: [
          { id: 1, username: 'Erik Fernandes', type: 'Administrator', status: 'Active' },
          { id: 2, username: 'Erik Vanderlei', type: 'Customer', status: 'Inactive' }
        ],
        search: ''
      }
    },
    methods: {
      rowClicked () {
        console.log('Row is clicked')
      }
    }
  }
</script>

<style lang="scss">

</style>
