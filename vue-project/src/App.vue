<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
</script>

<template>
  <header>
    <div class="site-header">
      <div id="container">
        <nav>
          <ul class="menu">
            <!-- Top -->
            <li>
              <a href="#"><RouterLink to="/">Top</RouterLink></a>
              <ul class="menu-child">
                <li><a href="#">こんな感じで</a></li>
                <li><a href="#">メニュー表示もできるよ✌</a></li>
              </ul>
            </li>
            <!-- contents -->
            <li>
              <a href="#"><RouterLink to="/contents">contents</RouterLink></a>
              <ul class="menu-child"></ul>
            </li>
            <!-- map -->
            <li>
              <a href="#"><RouterLink to="/map">map</RouterLink></a>
              <ul class="menu-child"></ul>
            </li>
            <!-- events -->
            <li>
              <a href="#"><RouterLink to="/events">events</RouterLink></a>
              <ul class="menu-child"></ul>
            </li>
            <!-- access -->
            <li>
              <a href="#"><RouterLink to="/access">access</RouterLink></a>
              <ul class="menu-child"></ul>
            </li>
            <!-- price -->
            <li>
              <a href="#"><RouterLink to="/price">price</RouterLink></a>
              <ul class="menu-child"></ul>
            </li>
            <li>
              <a href="#"><RouterLink to="/login">login</RouterLink></a>
              <ul class="menu-child"></ul>
            </li>
          </ul>
        </nav>
        <!-- <p>This is App.</p> -->
      </div>

      <img id="img_title" src="./assets/img_top2.jpg" />
      <h1>See-Through Museum</h1>
    </div>
  </header>
  <br />
  <article v-if="connected" class="flex jc-around a-center border-black">
    <h2 style="color: white">Client: {{ user.email }}</h2>
    <button v-on:click="disconnect">disconnect</button>
  </article>
  <br />
  <RouterView
    :articles="articles"
    :basket="basket"
    :message-error="messageError"
    :connected="connected"
    @add-article="addArticle"
    @delete-article="deleteArticle"
    @update-article="updateArticle"
    @login="login"
    @signup="signup"
  ></RouterView>
  <!-- <RouterView /> -->
  <br />
  <p class="empty"></p>
  <br />
  <!-- footer -->
  <footer>
    <div id="container">
      <nav>
        <ul class="footer_menu">
          <!-- About us -->
          <li>
            <a href="#"><RouterLink to="/">About us</RouterLink></a>
          </li>
          <!-- Contact us -->
          <li>
            <a href="#"><RouterLink to="/">Contact us</RouterLink></a>
          </li>
          <!-- access -->
          <li>
            <a href="#"><RouterLink to="/access">Access</RouterLink></a>
          </li>
        </ul>
      </nav>
      <!-- <p>This is App.</p> -->
    </div>
    <p>© All rights created by Ko.</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      articles: [],
      basket: {
        createdAt: null,
        updatedAt: null,
        articles: []
      },
      messageError: null,
      user: null,
      connected: false
    }
  },
  async mounted() {
    //get articles
    const res = await axios.get('/api/articles')
    this.articles = res.data

    //update connexion mode
    try {
      this.user = (await axios.get('/api/connecion')).data //verify connexion mode
      console.log('user: ', this.user)
      if (this.user === null || this.user == {} || this.user.email == null) {
        console.log('user is null')
      } else {
        console.log('')
        this.connected = true //update connexion mode
      }
    } catch (error) {
      if (error.response.statusCode === 401) {
        //deconnected
        this.connected = false
      } else {
        //Display error message console
        console.log('error', error)
      }
    }
    // const res2 = await axios.get('/api/basket')
    // this.basket = res2.data
    console.log('connected: ', this.connected)
  },
  methods: {
    async addArticle(article) {
      const res = await axios.post('/api/article', article).catch((error) => {
        // [Note] that the output of error here is not an object [error.response is an object].
        console.log(error)
        if (error.response) {
          // The request was sent, but the server responded with a status code that was not in the 2xx range.
          console.log(error.response.data)
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
        console.log(error.config)
      })
      this.articles.push(res.data) //Add article in the list
    },
    async updateArticle(newArticle) {
      await axios.put('/api/article/' + newArticle.id, newArticle)
      const article = this.articles.find((a) => a.id === newArticle.id)
      article.name = newArticle.name
      article.description = newArticle.description
      article.image = newArticle.image
      article.price = newArticle.price
    },
    async deleteArticle(articleId) {
      await axios.delete('/api/article/' + articleId)
      const index = this.articles.findIndex((a) => a.id === articleId)
      this.articles.splice(index, 1)
    },
    async login(user) {
      console.log('app func LOGIN ')
      try {
        this.user = (await axios.post('/api/login', user)).data //get user information
        console.log('app func LOGIN post /api/login')
        this.connected = true //change connexion mode
        this.$router.push('/').catch(() => {}) //go to home page
      } catch (error) {
        //display error message
        this.messageError = error.response.data.message
      }
    },
    async signup(user) {
      console.log('app func SIGNUP ')
      try {
        this.user = (await axios.post('/api/signup', user)).data //get user information
        console.log('app func LOGIN post /api/signup')
        this.connected = true //change connexion mode
        this.$router.push('/').catch(() => {}) //go to home page
      } catch (error) {
        //display error message
        this.messageError = error.response.data.message
      }
    },
    async disconnect() {
      try {
        await axios.get('/api/disconnecion') //recall function to disconnect
        this.connected = false //change connection mode
        this.$router.push('/').catch(() => {}) //jump to home page
      } catch (error) {
        //display error message in console
        console.log('error', error)
      }
    }
  }
}
</script>

<style scoped>
* {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  padding: 0;
  line-height: 100%;
  list-style-type: none;
  text-decoration: none;
  font-weight: lighter;
}

/*他デバイス用*/
@media (max-width: 600px) {
  .content {
    width: 100%; /* 画面が狭い時は100%の幅 */
  }
  img {
    max-width: 100vw;
  }
}

.site-header {
  width: 80vw;
  margin: 0 auto;
  position: relative;
}

.site-header img {
  width: 100vw;
  height: auto;
}

.limited_title {
  text-align: center;
  font-size: 32pt;
}

.limited_content {
  text-align: center;
  font-size: 32pt;
}

h1 {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;
  font-size: 60px;
  white-space: nowrap;
  color: white;
  text-shadow:
    2px 2px 10px #4d9bc1,
    -2px 2px 10px #4d9bc1,
    2px -2px 10px #4d9bc1,
    -2px -2px 10px #4d9bc1;
}

#img_title {
  margin-top: 0;
  width: 100%;
  height: 300px;
  object-fit: cover; /* この一行を追加するだけ！ */
  background-size: cover;
  background-position: center;
}

#container {
  margin: 0 auto;
  position: relative;
  width: 80vw;
  min-width: 768px;
  background-color: #f5f5f5;
}

.empty {
  margin-bottom: 500px;
}

nav {
  position: relative;
  z-index: 999;
  box-shadow: 0 4px 0.3125rem rgba(0, 0, 0, 0.3);
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.menu li {
  position: relative;
  flex: 1;
  text-align: center;
  background-color: #555;
  border-inline: 1px solid white;
}

.menu a {
  display: block;
  padding: 1rem;
  color: white;
}

.menu a:hover {
  color: #0080ff;
  background-color: white;
}

.menu li:hover .menu-child {
  visibility: visible;
  opacity: 1;
}

.menu-child {
  position: absolute;
  top: 5rem;
  left: 0px;
  width: 100%;
  box-shadow: 0 4px 0.3125rem rgba(0, 0, 0, 0.3);
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

.menu-child li {
  border-top: 1px dotted silver;
}

/* color palette from <https://github.com/vuejs/theme> */
:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-black: #181818;
  --vt-c-black-soft: #222222;
  --vt-c-black-mute: #282828;

  --vt-c-indigo: #2c3e50;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
  --vt-c-text-dark-1: var(--vt-c-white);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}

/* semantic color variables for this project */
:root {
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);

  --color-border: var(--vt-c-divider-light-2);
  --color-border-hover: var(--vt-c-divider-light-1);

  --color-heading: var(--vt-c-text-light-1);
  --color-text: var(--vt-c-text-light-1);

  --section-gap: 160px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-black);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);

    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);

    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition:
    color 0.5s,
    background-color 0.5s;
  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer {
  width: 100%;
  height: 30px;
  color: white;
  text-align: center;
}
ul.footer-menu li {
  display: inline;
}

.footer_menu {
  display: flex;
  flex-direction: row;
  background-color: #555;
  justify-content: space-around;
  height: 30px;
  align-items: center;
}

.footer_menu li {
  position: relative;
  flex: 1;
  background-color: #555;
  border-inline: 1px solid white;
  align-items: center;
}

.footer_menu a {
  display: block;
  color: white;
  padding: 3px;
  align-items: center;
}

.footer_menu a:hover {
  color: #0080ff;
  background-color: white;
  padding: 3px;
  align-items: center;
}
</style>
