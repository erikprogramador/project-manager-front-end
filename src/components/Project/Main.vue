<template>
  <main class="projects">
    <h1 class="page-header">Projects</h1>
    <button class="button button-float button-top-right">
      <img src="../../assets/links/light-plus.svg" alt="Add Project">
    </button>
    <div class="panel-container">
      <panel :fullWidth="true">
        <h3 slot="header">All Projects</h3>
        <project-list />
      </panel>
    </div>
  </main>
</template>

<script>
  import Panel from '../Display/Panel.vue'
  import ProjectList from './ProjectList.vue'
  export default {
    components: { Panel, ProjectList }
  }
</script>

<style lang="scss" scoped></style>
