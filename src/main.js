import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import bulma from 'bulma'
import fontawesome from '@fortawesome/fontawesome-free'

Vue.config.productionTip = false

new Vue({
  router,
  bulma,
  fontawesome,
  render: h => h(App)
}).$mount('#app')