<template>
  <main class="projects">
    <h1 class="page-header">Projects</h1>
    <div class="panel-container">
      <panel :fullWidth="true">
        <h3 slot="header">All Projects</h3>
        <table></table>
      </panel>
    </div>
  </main>
</template>

<script>
  import Panel from '../Display/Panel.vue'
  export default {
    components: { Panel }
  }
</script>

<style lang="scss" scoped></style>
