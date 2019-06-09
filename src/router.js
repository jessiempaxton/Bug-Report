import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BugCloseUp from './views/BugCloseUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bugcloseup/:id',
      name: 'bugcloseup',
      component: BugCloseUp,
      props: true
    }
  ]
})
