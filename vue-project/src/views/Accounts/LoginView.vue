<template>
  <article>
    <form id="formulaire-login" @submit.prevent="connect" v-if="!connected">
      <h2>Login</h2>
      <input name="email" type="email" placeholder="* E-mail " v-model="user.email" required />
      <input
        name="password"
        type="password"
        placeholder="put in your password"
        v-model="user.password"
        required
      />
      <button type="submit">Log in</button>
      <p v-text="messageError"></p>
      <p>
        <a href="#"><RouterLink to="/signup">signup</RouterLink></a>
      </p>
      <p>
        <a href="#"><RouterLink to="/register">register</RouterLink></a>
      </p>
    </form>
    <div v-else>
      {{ jumpToAcAccueil() }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'LoginView',
  props: {
    messageError: { type: String },
    connected: { type: Boolean }
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    connect() {
      console.log('Login vue HELLO')
      this.$emit('login', this.user)
    },
    jumpToAcAccueil() {
      alert('If you are already logged in, you will be forwarded to the Home page. ')
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style scoped>
p {
  color: red;
}
</style>
