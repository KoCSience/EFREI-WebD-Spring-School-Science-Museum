<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div class="container">
        <!-- <img id="img_title" src="img_temp.png"> -->
        <h1>See-Through Museum</h1>
      </div>
      <div class="tab_title">
        <p id="tabcontrol">
          <a href="top.html">Top</a>
          <a href="contents.html">Contents</a>
          <a href="map.html">Map</a>
          <a href="events.html">Events</a>
          <a href="access.html">Access</a>
          <a href="price.html">Price</a>
        </p>
      </div>
      <div id="tabbody">
        <div id="toppage_top">Welcome to See-Through Museum Website</div>
        <div id="toppage_contents">…… content ……</div>
        <div id="tabpage_map">…… map ……</div>
        <div id="tabpage_events">…… events ……</div>
        <div id="tabpage_access">…… access ……</div>
        <div id="tabpage_price">…… price ……</div>
     </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
