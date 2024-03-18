<script setup></script>

<template>
  <br />
  <h1>REGULAR CONTENTS</h1>
  <br />

  <div class="container">
    <div class="content">
      <img
        src="../assets/Transportation_Area.png"
        alt="交通エリア"
      />
      <p>Transportation Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: Dive into the world of transportation machinery 
          that's indispensable to our daily lives, featuring automobiles, 
          indoor trains, and aircraft. Get an unparalleled look at engine 
          structures and motors usually hidden from view. 
          Enjoy exclusive rides on vehicles only available within the museum!
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Home_Interior_Area.png"
        alt="インテリア（配線・電化製品）"
      />
      <p>Home Interior Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: This section visually celebrates the science and 
          technology within homes, offices, and stores. 
          Discover the workings of electrical wiring and various household appliances. 
          The exclusive gadgets corner offers unique home electronics not found anywhere else!
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Stores_and_Restaurants_Area.png"
        alt="店舗とレストラン"
      />
      <p>Stores and Restaurants Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: Observe the cooking and working processes in stores, 
          showcasing the extensive technology involved. 
          Full of intriguing details, these places double as actual restaurants 
          where you can enjoy delicious meals and fun times.
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Souvenirs_Area.png"
        alt="お土産"
      />
      <p>Souvenirs Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: Shop for products made in the museum's factory. 
          Payment is a breeze with the museum's smartphone app, ensuring no long lines. 
          Surprise your family and friends with unique food and electronics only available here!
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Factory_Area.png"
        alt="工場"
      />
      <p>Factory Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: See where the museum's food and select electronics are made. 
          Watch robots at work in vivid detail—a fantastic learning opportunity. 
          Items made here are available for purchase in the souvenir shop.
        </div>
      </details>
    </div>

    <div class="content">
      <img 
        src="../assets/Museum_Smartphone_Area.png"
        alt="ミュージアムスマートフォン" 
      />
      <p>Museum Smartphone Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: Your first stop should be here to pick up a smartphone, 
          which includes a map and payment functions for use within the museum. 
          Rentals are free and limited to one per person.
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Medical_Area.png"
        alt="医療エリア"
      />
      <p>Medical Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: This medical space is here if you're feeling unwell, 
          offering free treatment. It's also full of scientific and technological 
          advancements in medical equipment, showcasing cutting-edge technology.
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/WC_Area.png"
        alt="トイレ"
      />
      <p>WC Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: There are 18 restrooms throughout the museum, 
          free for use and maintained in pristine condition. 
          They are accessible restrooms, ensuring all visitors can use the facilities comfortably. 
          Don't worry; they're not see-through.
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Wheel_Area.png"
        alt="観覧車"
      />
      <p>Ferris Wheel</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: Overlook the museum from the ferris wheel. Open to all ages, 
          but note there's a separate charge of 5 euros per person. 
          The highest point is 80m! 
          Be aware that operations may cease abruptly due to bad weather.
        </div>
      </details>
    </div>

    <div class="content">
      <img
        src="../assets/Game_Area.png"
        alt="ゲームコーナー"
      />
      <p>Game Area</p>
      <details>
        <summary class="detail-button"></summary>
        <div>
          Details: Play on numerous gaming consoles and learn about the history 
          of gaming, along with the computer science technology used in each era. 
          This space features rare gaming consoles no longer for sale and 
          exclusive models only found in the museum.
        </div>
        <div>説明</div>
      </details>
    </div>

    <!-- 他のコンテンツブロックを追加する場合も、この.container内に配置 -->
  </div>  
  <br>
  <p class="empty"></p>
</template>

<style>
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

.detail-button {
  position: absolute;
  top: 200px;
  right: 10px;
  height: 20px;
  margin: 5px;
  cursor: help;
  background: #fff;
  color: black;
  border: none;
  padding: 2px 3px 2px 7px;
  border-radius: 50%;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.detail-content {
  display: none; /* 初期状態では非表示 */
  padding: 10px;
}

.empty {
  margin-bottom: 500px;
}
</style>