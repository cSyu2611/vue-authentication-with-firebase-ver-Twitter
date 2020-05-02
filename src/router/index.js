import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase"
import Home from '../views/Home.vue'
import SignUp from '@/components/SignUp'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signUp',
        })
      }
    })
  }
  else {
    next()
  }
})



export default router
