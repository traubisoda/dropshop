<template>
  <ContentCard>
    <h1 class="text-black font-semibold uppercase text-2xl">
      {{ category.name }}
    </h1>
    <p class="text-sm">{{ category.description }}</p>
    <div>
      <div v-for="chunk in productChunks" class="flex">
        <div v-for="product in chunk" class="w-1/4">
          <nuxt-link
            :to="{
              name: 'products-id',
              params: { id: product.id }
            }"
          >
            {{ product.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </ContentCard>
</template>

<script>
import ContentCard from '~/components/ContentCard'
import chunk from '~/utils/chunk'

export default {
  components: { ContentCard },
  async asyncData({ app, params }) {
    const category = (await app.$woo.get(`products/categories/${params.id}`))
      .data
    const products = (await app.$woo.get('products', { category: params.id }))
      .data

    return { category, products }
  },
  computed: {
    productChunks() {
      return chunk(this.products, 4)
    }
  }
}
</script>
