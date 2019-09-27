import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue',
  routes: [
    {
      path: '/hello',
      name: 'home',
      component: () => import('../hello.vue'),
    },
  ]
})
