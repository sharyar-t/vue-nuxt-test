export const appStore = {
  namespaced: true,
  state: () => ({
    drawer: true
  }),
  mutations: {
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer
    },
    SET_DRAWER(state, value) {
      state.drawer = value
    }
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('TOGGLE_DRAWER')
    },
    setDrawer({ commit }, value) {
      commit('SET_DRAWER', value)
    }
  },
  getters: {}
}
