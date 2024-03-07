<script setup>
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.detail-button')

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      // 他の全てのdetail-contentを閉じる
      document.querySelectorAll('.detail-content').forEach(
        function (detail) {
          if (detail !== this.nextElementSibling) {
            detail.style.display = 'none'
          }
        }.bind(this)
      ) // bind this to use in forEach

      // このボタンの隣接するdetail-contentの表示状態を切り替える
      const detailContent = this.nextElementSibling
      const isDisplayed = detailContent.style.display === 'block'
      detailContent.style.display = isDisplayed ? 'none' : 'block'

      // コンテナの高さが調整されるので、ページのレイアウトを再計算する
      window.dispatchEvent(new Event('resize'))
    })
  })
})
</script>

<template>
  <br />
  <h1>SPECIAL EVENT</h1>
  <br />

  <div class="container">
    <div class="content">
      <img
        src="https://www.axismag.jp/axismag-admin/wp-content/uploads/2023/08/DSC3921.jpg"
        alt="透明な食べもの"
      />
      <p>See-through food</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>No colorants</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://mrs.living.cdn.anymanager.io/wp-content/uploads/2022/11/139eaa8d905179c143727e9d3f069727.jpg"
      />
      <p>Illumination</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>詳細2</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://previews.123rf.com/images/kchung/kchung1710/kchung171000179/88426010-%E6%97%A5%E6%9C%AC%E6%96%87%E5%8C%96%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%81%A7%E3%81%99%E3%80%82.jpg"
        alt="日本コラボ"
      />
      <p>Japan collaboration</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>詳細3</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://img01.jalannews.jp/img/2022/10/20221006_okomoriyado_sashikae_009-670x443.jpg"
        alt="透明な食べもの"
      />
      <p>Accommodation Campaign</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>詳細4</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://www.earth-garden.jp/wordpress/wp-content/uploads/2016/01/s1200_unnamed-3-1038x576.jpg"
        alt="透明な食べもの"
      />
      <p>Music Fes</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>詳細5</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://www.earth-garden.jp/wordpress/wp-content/uploads/2016/01/s1200_unnamed-3-1038x576.jpg"
        alt="透明な食べもの"
      />
      <p>Music Fes</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>詳細6</p>
      </div>
    </div>

    <!-- 他のコンテンツブロックを追加する場合も、この.container内に配置 -->
  </div>

  <br />
  <h1>COMING SOON...</h1>
  <br />

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
        src="https://www.axismag.jp/axismag-admin/wp-content/uploads/2023/08/DSC3921.jpg"
        alt="透明な食べもの"
      />
      <p>French collaboration</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>NO CONTENTS</p>
      </div>
    </div>

    <div class="content">
      <img
        src="https://www.axismag.jp/axismag-admin/wp-content/uploads/2023/08/DSC3921.jpg"
        alt="透明な食べもの"
      />
      <p>see-through food</p>
      <button class="detail-button">+</button>
      <div class="detail-content">
        <p>No colorants</p>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: black;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}

/*説明の文字*/
p {
  color: white;
}

/*個別の文字*/
h1 {
  color: white;
  margin-top: 100px;
}

/*コンテンツの箱*/
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
  bottom: 10px;
  right: 10px;
  cursor: help;
  background: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.detail-content {
  display: none; /* 初期状態では非表示 */
  padding: 10px;
}

/*他デバイス用*/
@media (max-width: 600px) {
  .content {
    width: 100%; /* 画面が狭い時は100%の幅 */
  }
}
</style>
