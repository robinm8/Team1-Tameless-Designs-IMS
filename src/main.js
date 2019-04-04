import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

import store from './stores/store'
import { firebaseListener } from './config/firebaseConfig'
import App from './App.vue'

import firebaseui from 'firebaseui'
import firebase from 'firebase'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const state = {}

var vue = null;

Vue.use(firebase)
Vue.use(firebaseui)

Vue.use(Vuetify)
Vue.use(VueRouter)

firebaseListener(authStatusChange)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    var isLoggedIn = firebase.auth().currentUser != null

    if (to.matched.some(record => record.meta.requiresLogin) && !isLoggedIn) {
        if (from.path != '/login') {
          next('/login')
        } else {
          next(false)
        }
    } else if (to.path == '/login' && isLoggedIn) {
          next('/')
    } else {
        next()
    }
})

function authStatusChange (loggedIn, user) {
  if (!vue) {

      new Vue({
          el: '#app',
          router,
          store,
          render: h => h(App),
      })

      vue = true;
  }

  if (store) {
    store.commit('AUTH_STATUS_CHANGE')

    if (user) {
        // Load user-unique data

        let message_obj = {
            message: `Welcome back, ` + (user.displayName ? user.displayName : user.phoneNumber),
            messageClass: 'success',
            autoClose: true
        }

        store.commit('ADD_MESSAGE', message_obj)
    } else {
      router.push({
        name: 'login'
      })
    }
  }
}

export default {
  state
}
