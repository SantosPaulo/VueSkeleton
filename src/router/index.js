/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import BaseRoutes from './baseRoutes'
// import Store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...BaseRoutes
  ]
})

export default router
/*function guardAuth (to, from, next) {
  let AuthStore = Store.state.Auth
  if (AuthStore.email != null && AuthStore.id !== null && AuthStore.token !== null && AuthStore.status === StoreStatus.ready) {
    next()
  } else {
    next('/auth')
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requiresAuth)) {
    guardAuth(to, from, next)
  }
  next()
})*/
