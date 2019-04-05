import { ref, firebaseAuth } from '../config/firebaseConfig'

// actions for components to map via "mapActions"

export const logout = ({commit}) => {
  commit('CLEAR_MESSAGE')
  return firebaseAuth().signOut()
}

export const registerByEmail = (_, {email, password}) => {
  return firebaseAuth().createUserWithEmailAndPassword(email, password)
}

export function loginWithEmail (_, {email, password}) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function listenToItemsList ({commit}) {
  return ref.child('items').on('value', (items) => {
    commit('UPDATE_ITEMS_LIST', items.val())
  })
}
