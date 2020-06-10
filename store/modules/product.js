export const state = () => ({
  product: null
})

export const mutations = {
  setProduct(state, data) {
    state.product = data
  }
}

export const actions = {
  async GET_PRODUCT({ commit }, sku) {
    const product = await this.$mage.getProduct(sku)
    commit('setProduct', product)
  }
}
