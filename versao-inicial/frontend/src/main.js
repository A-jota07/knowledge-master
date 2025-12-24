import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import axios from 'axios'
import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

if (store.state.user && store.state.user.token) {
  axios.defaults.headers.common['Authorization'] =
    `Bearer ${store.state.user.token}`
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')