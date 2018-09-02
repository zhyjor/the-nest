import Vue from 'vue'
import Router from 'vue-router'
import FixedTop from '@/components/FixedTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FixedTop',
      component: FixedTop
    }
  ]
})
