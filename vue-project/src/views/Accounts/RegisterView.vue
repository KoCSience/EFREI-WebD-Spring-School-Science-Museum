<!-- DONT USE -->
<template>
  <p>Register</p>
  <form @submit.prevent="addUser">
    <h2>register</h2>
    <input type="email" v-model="newUser.email" placeholder="e-mail" required />
    <input type="password" v-model="newUser.password" placeholder="password" required />
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    addUser() {
      this.$emit('registerUser', this.newUser)
      this.newUser.email = null
      this.newUser.password = null
    }
  }
}
</script>
