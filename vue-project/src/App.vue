<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img id="img_title" src="./assets/img_temp.png">
    <h1>See-Through Museum</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/price">Price</RouterLink>
      </nav>
      <!-- <p>This is App.</p> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
