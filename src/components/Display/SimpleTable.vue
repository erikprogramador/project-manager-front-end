<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :class="{ inactive: inactive, error: error}">
        <td v-for="column in columns">{{ item[column] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: ['columns', 'items', 'inactive', 'error']
  }
</script>

<style lang="scss">

</style>
