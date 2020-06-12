export const state = () => ({
  menu: []
})

export const getters = {
  menu(state) {
    return state.menu
  }
}

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$woo.get('menu')
    commit('SET_MENU', response.data)
  }
}
