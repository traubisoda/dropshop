<template>
  <div>
    <form>
      <label for="">Email</label>
      <input v-model="email" type="email" />
      <label for="">Password</label>
      <input v-model="password" type="password" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
