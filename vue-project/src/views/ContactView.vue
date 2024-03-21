<template>
  <div class="content">
    <h1>Contact</h1>
    <br />
    <p>email: test@jp</p>
    <br />
    <p>phone: 0000000</p>
  </div>
</template>

<style>
* {
  color: white;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  list-style-type: none;
  text-decoration: none;
  font-weight: lighter;
}

.content {
  border: 0px solid #ddd;
  color: white;
  position: relative; /* +ボタンを絶対位置で配置するための基準点とする */
  text-align: center;
}

.content img {
  display: block; /* 画像をブロック要素として設定 */
  width: 100%; /* コンテナの幅に合わせて調整 */
  height: 200px; /* 画像の高さを統一 */
  object-fit: cover; /* 画像をコンテナに合わせてトリミング */
  object-position: flex-start; /* 画像がコンテナの中央に配置されるように調整 */
}

.content p {
  font-size: 1em;
}

.content img {
  display: block; /* 画像をブロック要素として設定 */
  width: 100%; /* コンテナの幅に合わせて調整 */
  height: 200px; /* 画像の高さを統一 */
  object-fit: cover; /* 画像をコンテナに合わせてトリミング */
  object-position: flex-start; /* 画像がコンテナの中央に配置されるように調整 */
}

.content p {
  font-size: 1em;
}
</style>
