<template>
  <main class="projects">
    <h1 class="page-header">Projects</h1>
    <button class="button button-float button-top-right" @click="toggleNewProjectModal">
      <img src="../../assets/links/light-plus.svg" alt="Add Project">
    </button>
    <modal :visible="newProjectModal" @closeModal="toggleNewProjectModal">
      <h3 slot="header">Modal</h3>
      <form>
        <project-create />
      </form>
      <footer slot="footer">
        <button class="button button-error" @click="toggleNewProjectModal">Cancelar</button>
        <button class="button button-highlight">Adicionar</button>
      </footer>
    </modal>
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
  import Modal from '../Display/Modal.vue'
  import ProjectList from './ProjectList.vue'
  import ProjectCreate from './ProjectCreate.vue'
  export default {
    components: { Panel, Modal, ProjectList, ProjectCreate },
    data () {
      return {
        newProjectModal: false
      }
    },
    methods: {
      toggleNewProjectModal () {
        this.newProjectModal = !this.newProjectModal
      }
    }
  }
</script>

<style lang="scss" scoped></style>
