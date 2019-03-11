import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue' 

Vue.use(Router)

export default new Router({
      routes:[//配置路由 
        { 
          path: '/', //访问路径 
          name: 'home', //路由名称 
          component: home //路由需要的组件（驼峰式命名） 
        } 
    ]
  }
)