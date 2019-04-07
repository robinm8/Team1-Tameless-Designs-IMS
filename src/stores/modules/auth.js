import { firebaseAuth } from '../../config/firebaseConfig'

const state = {
  isLoggedIn: firebaseAuth().currentUser != null,
  user: firebaseAuth().currentUser
}

const mutations = {
  'AUTH_STATUS_CHANGE' (state) {
    state.user = firebaseAuth().currentUser
    state.isLoggedIn = firebaseAuth().currentUser != null
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
        uid: state.user.uid,
        metadata: state.user.metadata,
        isNewUser: (state.user.metadata.creationTime == state.user.metadata.lastSignInTime)
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
