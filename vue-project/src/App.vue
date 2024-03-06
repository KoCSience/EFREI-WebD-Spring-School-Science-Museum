<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="site-header">
      <img id="img_title" src="./assets/img_temp.png">
      <h1>See-Through Museum</h1>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/price">Price</RouterLink>
        <RouterLink to="/map">Map</RouterLink>
        <RouterLink to="/access">Access</RouterLink>
      </nav>
      <!-- <p>This is App.</p> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.site-header{
  width:600px;
  height:auto;
  position: relative;
}

.site-header img{
  width:100%;
  height:auto;
}

h1{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding:0;
  margin:0;
  font-size:30px;
  white-space: nowrap;
  color: white;
  -webkit-text-stroke: 1px black;
}

#img_title {
  margin-top: 0;
  width: 100%;
  height: auto;
  position: right;
}
</style>
