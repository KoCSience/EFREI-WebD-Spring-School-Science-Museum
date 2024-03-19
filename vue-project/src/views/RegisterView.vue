<template>
    <form @submit.prevent="addUser">
      <h2>Nouveau produit à ajouter</h2>
      <input type="email" v-model="newUser.email" placeholder="e-mail" required>
      <input type="password" v-model="newArticle.password" placeholder="password">
      <button type="submit">Register</button>
    </form>
</template>

<script>
export default{
    name: 'register', 
        data () {
        return {
            newUser: {
                email: '',
                password: ''
            },
        }
    },
    methods: {
        addArticle () {
            this.$emit('register', this.newUser)
             this.newArticle.email = null
             this.newArticle.password = null
        },
    }
}
</script>./AddUserView.vue