import Vue from 'vue';
import ElementUI from 'element-ui'
import app from './app.vue'
import router from './router.js'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/header.css'
import './assets/css/common.css'
import './assets/css/item.css'
import './assets/css/item_movie.css'
import './assets/css/tag.css'

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')