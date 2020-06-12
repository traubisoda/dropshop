<template>
  <header class="header">
    <img src="~assets/img/logo.jpg" alt="logo" class="logo" />
    <div class="flex-1 flex items-center">
      <div v-for="item in menu" :key="item.id" class="mr-3">
        <nuxt-link
          :to="getMenuLinkParams(item)"
          class="text-black font-semibold uppercase text-sm"
          >{{ item.title }}</nuxt-link
        >
      </div>
    </div>
    <div class="block">
      <div v-if="$auth.loggedIn">
        Logout
      </div>
      <nuxt-link
        v-else
        :to="{
          name: 'login'
        }"
        >Login</nuxt-link
      >
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-black-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-black h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      menu: 'menu'
    })
  },
  methods: {
    getMenuLinkParams(menuItem) {
      const pageMapping = {
        product_cat: 'categories-id',
        product: 'products-id',
        post: 'posts-id',
        page: 'page-id'
      }

      return {
        name: pageMapping[menuItem.object],
        params: { id: menuItem.objectId }
      }
    }
  }
}
</script>

<style scoped>
.header {
  height: 65px;
  @apply flex items-center px-4 border-t border-b border-white bg-white shadow;
}
.logo {
  width: 45px;
  height: 45px;
}
</style>
