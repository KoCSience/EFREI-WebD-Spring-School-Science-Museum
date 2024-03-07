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
    <!-- <h1 class="green">{{ msg }}</h1> -->
    <!-- <div class="tab_title">
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
        <p>Welcome to See-Through Museum Website</p>
        <div id="toppage_contents">…… content ……</div>
        <div id="tabpage_map">…… map ……</div>
        <div id="tabpage_events">…… events ……</div>
        <div id="tabpage_access">…… access ……</div>
        <div id="tabpage_price">…… price ……</div>
     </div>-->
    <div class="limited_title">
      <p>limited time</p>
    </div>
    <ul class="limited_content">
      <li>You can get 100$!</li>
      <li>You can get 100$!</li>
    </ul>
    
    <div class="news_title">
      <p>News</p>
    </div>
    <ul class="news_content">
      <div id="news_container">
        <nav>
          <ul class="news_menu">
            <li>
              <a href="#">News1............</a>
            </li>
            <!-- contents -->
            <li>
              <a href="#">News2............</a>
            </li>
            <!-- map -->
            <li>
              <a href="#">News3............</a>
            </li>
          </ul>
        </nav>
        <!-- <p>This is App.</p> -->
      </div>
    </ul>
    
    <div class="price_title">
      <p>price</p>
    </div>
    <ul class="price_content">
      <li>Children 	: xxx€~</li>
      <li>Students 	: xxx€~</li>
      <li>Adults	: xxx€~</li>
    </ul>

    <div id="access_container">
      <nav>
        <ul class="access_menu">
          <!-- access -->
          <li>
            <a href="#"><RouterLink to="/access">Access >></RouterLink></a>
          </li>
        </ul>
      </nav>
      <!-- <p>This is App.</p> -->
    </div>
    
    <div class="contents_title">
      <p>contents</p>
    </div>
    <div class="container">
    <div class="content">
      <img
        src="https://dol.ismcdn.jp/mwimgs/f/b/650/img_fb9b185f88898099e9a6d8f39e576bf1245244.jpg"
        alt="透明な食べもの"
      />
      <p>French collaboration</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>No colorants</p>
      </div>
    </div>
    <div class="content">
      <img
        src="https://tips.spacely.co.jp/wp-content/uploads/2021/06/shutterstock_402321685-e1624589182233.jpg"
        alt="透明な食べもの"
      />
      <p>Latest games fes</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>NO CONTENTS</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://www.veltra.com/jp/guide/wp-content/uploads/2023/10/pixta_43237886_M.jpg"
        alt="透明な食べもの"
      />
      <p>UK collaboration</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>No colorants</p>
      </div>
    </div>
  </div>
    
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  line-height: 120%;
  list-style-type: none;
  text-decoration: none;
  font-weight: lighter;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /*中央揃え*/
  gap: 20px; /* コンテンツ間の隙間を設定 */
}

.content {
  border: 0px solid #ddd;
  position: relative; /* +ボタンを絶対位置で配置するための基準点とする */
  width: calc(30.333% - 10px); /* 3つ並べるときの幅を計算 */
  margin-bottom: 10px; /* 下マージン */
  display: flex; /* フレックスボックスを使用 */
  flex-direction: column; /* 子要素を縦方向に並べる */
  justify-content: flex-start; /* 子要素の間隔を最大にする */
}

.content img {
  display: block; /* 画像をブロック要素として設定 */
  width: 100%; /* コンテナの幅に合わせて調整 */
  height: 200px; /* 画像の高さを統一 */
  object-fit: cover; /* 画像をコンテナに合わせてトリミング */
  object-position: flex-start; /* 画像がコンテナの中央に配置されるように調整 */
}

.detail-button {
  position: absolute;
  bottom: 0px;
  right: 10px;
  cursor: help;
  background: #fff;
  border: none;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.detail-content {
  display: none; /* 初期状態では非表示 */
  padding: 10px;
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;
  font-size: 30px;
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

.limited_title {
  text-align: center;
  color: white;
  font-size: 28pt;
  text-decoration: underline;
  text-decoration-color: silver;
}

.limited_content {
  text-align: center;
  font-size: 16pt;
  color: aqua;
  text-decoration: underline;
  text-decoration-color: aqua;
}

.news_title {
  text-align: center;
  color: white;
  font-size: 28pt;
  text-decoration: underline;
  text-decoration-color: silver;
}

.news_content {
  text-align: center;
  font-size: 16pt;
}

#news_container {
  margin: 0 auto;
  position: relative;
  width: 80vw;
  min-width: 768px;
  background-color: #f5f5f5;
}

nav {
  position: relative;
  z-index: 999;
  box-shadow: 0 4px 0.3125rem black;
}

.news_menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.news_menu li {
  position: relative;
  flex: 1;
  text-align: center;
  background-color: white;
  border: 1px solid #333;
}

.news_menu a {
  display: block;
  padding: 1rem;
  color: #0080ff;
}

.news_menu a:hover {
  color: #0080ff;
  background-color: white;
}

.news_menu li:hover .menu-child {
  visibility: visible;
  opacity: 1;
}

.price_title {
  text-align: center;
  color: white;
  font-size: 28pt;
  text-decoration: underline;
  text-decoration-color: silver;
}

.price_content {
  text-align: center;
  font-size: 16pt;
  color: white;
}

#access_container {
  margin: 0 auto;
  position: relative;
  width: 80vw;
  min-width: 768px;
  background-color: #f5f5f5;
}

.access_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.access_menu li {
  position: relative;
  flex: 1;
  text-align: center;
  background-color: #555;
}

.access_menu a {
  display: block;
  padding: 1rem;
  color: #0080ff;
  font-size: 16pt;
}

.access_menu a:hover {
  color: #0080ff;
  background-color: white;
}


.contents_title {
  text-align: center;
  color: white;
  font-size: 28pt;
  text-decoration: underline;
  text-decoration-color: silver;
}

.contents_content {
  text-align: center;
  font-size: 16pt;
  color: white;
}

/* ▼タブ */
#tabcontrol a {
  display: inline-block; /* インラインブロック化 */
  border-width: 1px 1px 0px 1px; /* 下以外の枠線を引く */
  border-style: solid; /* 枠線の種類：実線 */
  border-color: black; /* 枠線の色：黒色 */
  border-radius: 0.75em 0.75em 0 0; /* 枠線の左上角と右上角だけを丸く */
  padding: 0.75em 1em; /* 内側の余白 */
  text-decoration: none; /* リンクの下線を消す */
  color: black; /* 文字色：黒色 */
  background-color: white; /* 背景色：白色 */
  font-weight: bold; /* 太字 */
  position: relative; /* JavaScriptでz-indexを調整するために必要 */
}
/* ▼タブにマウスポインタが載った際(任意) */
#tabcontrol a:hover {
  text-decoration: underline; /* 文字に下線を引く */
}
/* ▼タブの中身 */
#tabbody div {
  border: 1px solid black; /* 枠線：黒色の実線を1pxの太さで引く */
  margin-top: -1px; /* 上側にあるタブと1pxだけ重ねるために「-1px」を指定 */
  padding: 1em; /* 内側の余白量 */
  background-color: white; /* 背景色：白色 */
  position: relative; /* z-indexを調整するために必要 */
  z-index: 0; /* 重なり順序を「最も背面」にするため */
}

#tab_title {
  margin-top: 0;
}

body {
  color: blue;
}

h1 {
  color: white;
}

h2 {
  color: rgb(255, 0, 0);
}
</style>
