import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes/router'
import store from './vuex/store'

Vue.use(VueRouter)

window.axios = axios

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
