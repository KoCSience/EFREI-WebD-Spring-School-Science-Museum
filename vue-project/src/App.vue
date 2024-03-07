<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
          </ul>
        </nav>
        <!-- <p>This is App.</p> -->
      </div>

      <img id="img_title" src="./assets/img_top.jpg" />
      <h1>See-Through Museum</h1>
    </div>
  </header>
  <br />
  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  line-height: 100%;
  list-style-type: none;
  text-decoration: none;
  font-weight: lighter;
}

body {
  font-family: sans-serif;
}

.site-header {
  width: 80vw;
  margin: 0 auto;
  position: relative;
}

.site-header img {
  width: 100%;
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
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;
  font-size: 60px;
  white-space: nowrap;
  color: white;
}

#img_title {
  margin-top: 0;
  width: 100%;
  height: auto;
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
</style>
