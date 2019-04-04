import { firebaseAuth } from '../../config/firebaseConfig'

const state = {
  isLoggedIn: firebaseAuth().currentUser != null,
  user: firebaseAuth().currentUser
}

const mutations = {
  'AUTH_STATUS_CHANGE' (state) {
    state.isLoggedIn = firebaseAuth().currentUser != null
    state.user = firebaseAuth().currentUser
  }
}

const actions = {

}

const getters = {
  isLoggedIn: (state) => {
    return state.isLoggedIn
  },
  currentUser: (state) => {
    if (state && state.user) {
      return {
        displayName: state.user.displayName,
        email: state.user.email,
        emailVerified: state.user.emailVerified,
        photoUrl: state.user.photoURL,
        phoneNumber: state.user.phoneNumber,
        uid: state.user.uid
      }
    } else {
      return {}
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
