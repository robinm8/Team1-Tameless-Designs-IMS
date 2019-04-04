import { ref, firebaseAuth } from '../config/firebaseConfig'

// actions for components to map via "mapActions"

export const logout = ({commit}) => {
  commit('SET_CART', [])
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

export function getShoppingCart ({commit}, {uid, currentCart}) {
  if (uid) {
    return ref.child('cart/' + uid).once('value').then((cart) => {
      if (cart.val() && (!currentCart || currentCart.length == 0)) {
        commit('SET_CART', cart.val())
      }
    })
  }
}

export function saveShoppingCart (_, {uid, cartItemList}) {
  return ref.child('cart/' + uid).set(cartItemList)
}

export function saveToTransaction (_, {uid, cartItemList}) {
  let newTransactionKey = ref.child('transactions').push().key
  var newTransaction = {}
  newTransaction['/transactions/' + uid + '/' + newTransactionKey] = cartItemList
  return ref.update(newTransaction)
}
