<template>
  <ContentCard>
    <div class="flex">
      <div class="w-3/5">
        <img
          v-if="image"
          :src="image.src"
          :alt="image.alt"
          :srcset="image.srcset"
        />
        <div class="flex mt-5 overflow-y-scroll">
          <img
            v-for="img in product.images"
            :key="img.id"
            class="inline-block mr-1"
            :src="img.thumbnail"
            :alt="img.alt"
          />
        </div>
      </div>
      <div class="w-2/5 pl-5">
        <h1 class="text-2xl font-bold uppercase">
          {{ product.name }}
        </h1>
        <div
          class="text-base text-gray"
          v-html="product.short_description"
        ></div>
        <p class="font-medium text-xl my-5">
          {{ price }}
          <span class="inline-block" v-html="product.currency_symbol" />
        </p>

        <div
          v-for="(attribute, name) in variationAttributes"
          :key="name"
          class="text-gray"
        >
          {{ name }}: {{ form.variation[attribute.name] }}<br />
          <select
            v-model="form.variation[attribute.taxonomy]"
            :value="form.variation[attribute.taxonomy]"
          >
            <option :value="null" disabled s
              >{{ attribute.name }} kiválasztása</option
            >
            <option
              v-for="option in attribute.options"
              :key="option.slug"
              :value="option.slug"
              >{{ option.name }}</option
            >
          </select>
        </div>

        <CTA>Add to cart</CTA>
      </div>
    </div>
  </ContentCard>
</template>

<script>
import ContentCard from '~/components/ContentCard'
import CTA from '~/components/CTA'
export default {
  components: { ContentCard, CTA },
  async asyncData({ app, params }) {
    const resp = await app.$woo.get(`products/${params.id}`)
    const product = resp.data

    return {
      product,
      image: product.images[0],
      form: {
        variation: product.attributes.reduce((carry, attribute) => {
          if (!attribute.variation) {
            return carry
          }
          carry[attribute.taxonomy] =
            product.default_attributes[attribute.taxonomy]?.slug || null

          return carry
        }, {})
      }
    }
  },
  computed: {
    variationAttributes() {
      return this.product.attributes
        .filter((attribute) => attribute.variation)
        .reduce((carry, attribute) => {
          carry[attribute.name] = attribute

          return carry
        }, {})
    },
    variation() {
      return this.product.variations.find((variation) => {
        return (
          JSON.stringify(variation.attributes) ==
          JSON.stringify(this.form.variation)
        )
      })
    },
    price() {
      return (this.variation || this.product).price
    }
  },
  watch: {
    variation() {
      this.image = this.variation.images[0] || this.product.images[0]
    }
  }
}
</script>
