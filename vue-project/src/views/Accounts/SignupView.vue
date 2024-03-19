<template>
  <article>
    <form id="formulaire-login" @submit.prevent="signup" v-if="!connected">
      <h2>Signup</h2>
      <input name="email" type="email" placeholder="* E-mail " v-model="user.email" required />
      <input
        name="password"
        type="password"
        placeholder="put in your password"
        v-model="user.password"
        required
      />
      <button type="submit">Signup</button>
      <p v-text="messageError"></p>
    </form>
    <div v-else>
      {{ jumpToAcAccueil() }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'SignupView',
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
      this.$emit('signup', this.user)
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
