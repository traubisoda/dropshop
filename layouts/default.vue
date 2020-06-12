<template>
  <div class="font-main">
    <Header />
    <Breadcrumbs />
    <main class="px-8">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Breadcrumbs from '~/components/Breadcrumbs'
export default {
  components: { Header, Breadcrumbs }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: theme('colors.black');
  background-color: #fafafa;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
