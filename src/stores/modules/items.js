const state = {
  isLoading: true,
  itemsList: []
}

const mutations = {
  'UPDATE_ITEMS_LIST' (state, itemsList) {
    state.itemsList = itemsList
    state.isLoading = false
  }
}

const actions = {

}

const getters = {
  items: (state) => {
    return state.itemsList
  },
  isItemsLoading: (state) => {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
