<template>
  <div>
    <form @submit="login">
      <label for="">Email</label>
      <input v-model="email" type="email" />
      <label for="">Password</label>
      <input v-model="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'traubisoda@gmail.com',
      password: 'traubisoda1991'
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      const resp = await this.$auth.loginWith('local', {
        data: {
          username: this.email,
          password: this.password
        }
      })
      console.log(resp)
    }
  }
}
</script>
