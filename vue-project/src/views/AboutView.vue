<template>
  <div class="content">
    <h1>About</h1>
    <br />
    <p>
      **[Company name/Organization name]** is a [Company/Organization] that was established in [Year
      of Establishment] and specializes in [Industry/Field]. We have a [concise mission statement or
      purpose] and serve [key customer groups or markets]. our vision Our vision is [Be specific
      about your vision]. To realize this vision, we are working on [key strategies and approaches
      to implement]. our mission Our mission is [specific mission]. We reflect this mission in our
      daily work through [specific actions and initiatives]. our value We value [Values ​​1],
      [Values ​​2], and [Values ​​3]. These values ​​are at the core of our culture and the basis of
      all decisions we make. our team Our team is made up of professionals with diverse backgrounds
      who have [team characteristics and strengths]. Each member has high expertise in [specific
      field or skill] and works together to achieve [goal or mission].
    </p>
    <br />
    <p>
      <a href="#"><RouterLink to="/contact">Contact us</RouterLink></a>
    </p>
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
</style>
