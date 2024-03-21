<template>
  <div class="container">
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

.container {
  /* display: flex; */
  /* flex-wrap: wrap; */
  text-align: center;
  /* justify-content: center; 中央揃え */
  gap: 20px; /* コンテンツ間の隙間を設定 */
  height: auto;
}

.content {
  border: 0px solid #ddd;
  color: white;
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

.content p {
  font-size: 1em;
}
</style>
