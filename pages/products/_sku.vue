<template>
  <div>
    <h1>{{ product.name }}</h1>

    {{ product }}
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const resp = await app.$woo.get('products/12')
    const product = resp.data
    return { product }
  }
}
</script>
