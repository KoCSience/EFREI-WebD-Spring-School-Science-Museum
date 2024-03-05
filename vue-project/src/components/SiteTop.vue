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
      <!-- <div class="tab_title">
        <p id="tabcontrol">
          <a href="top.html">Top</a>
          <a href="contents.html">Contents</a>
          <a href="map.html">Map</a>
          <a href="events.html">Events</a>
          <a href="access.html">Access</a>
          <a href="price.html">Price</a>
        </p>
      </div> -->
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
.container{
  width:600px;
  height:auto;
  position: relative;
}

.container img{
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

/* ▼タブ */
#tabcontrol a {
  display: inline-block;            /* インラインブロック化 */
  border-width: 1px 1px 0px 1px;    /* 下以外の枠線を引く */
  border-style: solid;              /* 枠線の種類：実線 */
  border-color: black;              /* 枠線の色：黒色 */
  border-radius: 0.75em 0.75em 0 0; /* 枠線の左上角と右上角だけを丸く */
  padding: 0.75em 1em;              /* 内側の余白 */
  text-decoration: none;            /* リンクの下線を消す */
  color: black;                     /* 文字色：黒色 */
  background-color: white;          /* 背景色：白色 */
  font-weight: bold;                /* 太字 */
  position: relative;               /* JavaScriptでz-indexを調整するために必要 */
}
/* ▼タブにマウスポインタが載った際(任意) */
#tabcontrol a:hover {
  text-decoration: underline;       /* 文字に下線を引く */
}
/* ▼タブの中身 */
#tabbody div {
  border: 1px solid black; /* 枠線：黒色の実線を1pxの太さで引く */
  margin-top: -1px;        /* 上側にあるタブと1pxだけ重ねるために「-1px」を指定 */
  padding: 1em;            /* 内側の余白量 */
  background-color: white; /* 背景色：白色 */
  position: relative;      /* z-indexを調整するために必要 */
  z-index: 0;              /* 重なり順序を「最も背面」にするため */
}

#tab_title {
  margin-top: 0;
}

body{
  color: blue;
}

h1{
  color: white;
}

h2{
  color: rgb(255, 0, 0);
}
</style>
