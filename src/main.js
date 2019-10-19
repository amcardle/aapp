import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import BootstrapVue from 'bootstrap-vue'
import Toasted from 'vue-toasted'
import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.use(Toasted)

Vue.config.productionTip = false

Vue.config.performance = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
