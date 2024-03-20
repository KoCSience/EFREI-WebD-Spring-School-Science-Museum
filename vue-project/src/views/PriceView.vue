<template>
  <div class="price">
    <div class="Purchase_Items">
      <div class="purchase_item">
          Entry
      </div>
      <div class="purchase_item">
          Event1
      </div>
      <div class="purchase_item">
          Event2
      </div>
    </div>
    <ul class="Purchase_Content">
      <div id="Purchase_Items">
        <nav>
          <ul class="purchase_item">
            <li>
              <a href="#">Entry</a>
              <ul class="Age_Content">
                <div id="Age_Items">
                  <nav>
                    <ul class="age_item">
                      <li>
                        <a href="#">Child</a>
                        <body>
                          <div class="count_container">
                            <div class="field">
                              <button class="button" id="down" @click="decrement()">－</button>
                              <input type="text" value="0" class="inputtext" id="textbox">
                              <button class="button" id="up" @click="increment()">＋</button>
                            </div>
                            <button class="button resetbtn" id="reset" @click="reset()">RESET</button>
                          </div>
                          <!-- <script src="../components/counter.js"></script> -->
                        </body>
                      </li>
                      <!-- contents -->
                      <li>
                        <a href="#">Student</a>
                        <body>
                          <div class="count_container">
                            <div class="field">
                              <button class="button" id="down" @click="decrement1()">－</button>
                              <input type="text" value="0" class="inputtext" id="textbox1">
                              <button class="button" id="up" @click="increment1()">＋</button>
                            </div>
                            <button class="button resetbtn" id="reset" @click="reset1()">RESET</button>
                          </div>
                          <!-- <script src="../components/counter.js"></script> -->
                        </body>
                      </li>
                      <!-- map -->
                      <li>
                        <a href="#">Adult</a>
                        <body>
                        <div class="count_container">
                          <div class="field">
                            <button class="button" id="down" @click="decrement2()">－</button>
                            <input type="text" value="0" class="inputtext" id="textbox2">
                            <button class="button" id="up" @click="increment2()">＋</button>
                          </div>
                          <button class="button resetbtn" id="reset" @click="reset2()">RESET</button>
                        </div>
                        <!-- <script src="../components/counter.js"></script> -->
                      </body>
                      </li>
                    </ul>
                  </nav>
                  <!-- <p>This is App.</p> -->
                </div>
              </ul>
            </li>
            <!-- contents -->
            <li>
              <a href="#">Event1</a>
              <body>
                <div class="count_container">
                  <div class="field">
                    <button class="button" id="down" @click="decrement3()">－</button>
                    <input type="text" value="0" class="inputtext" id="textbox3">
                    <button class="button" id="up" @click="increment3()">＋</button>
                  </div>
                  <button class="button resetbtn" id="reset" @click="reset3()">RESET</button>
                </div>
                <!-- <script src="../components/counter.js"></script> -->
              </body>

            </li>
            <!-- map -->
            <li>
              <a href="#">Event2</a>
              <body>
                <div class="count_container">
                  <div class="field">
                    <button class="button" id="down" @click="decrement4()">－</button>
                    <input type="text" value="0" class="inputtext" id="textbox4">
                    <button class="button" id="up" @click="increment4()">＋</button>
                  </div>
                  <button class="button resetbtn" id="reset" @click="reset4()">RESET</button>
                </div>
                <!-- <script src="../components/counter.js"></script> -->
              </body>
            </li>
            <li>
              <a href="#">Event3</a>
              <body>
                <div class="count_container">
                  <div class="field">
                    <button class="button" id="down" @click="decrement5()">－</button>
                    <input type="text" value="0" class="inputtext" id="textbox5">
                    <button class="button" id="up" @click="increment5()">＋</button>
                  </div>
                  <button class="button resetbtn" id="reset" @click="reset5()">RESET</button>
                </div>
                <!-- <script src="../components/counter.js"></script> -->
              </body>
            </li>
            <!-- contents -->
            <li>
              <a href="#">Event4</a>
              <body>
                <div class="count_container">
                  <div class="field">
                    <button class="button" id="down" @click="decrement6()">－</button>
                    <input type="text" value="0" class="inputtext" id="textbox6">
                    <button class="button" id="up" @click="increment6()">＋</button>
                  </div>
                  <button class="button resetbtn" id="reset" @click="reset6()">RESET</button>
                </div>
                <!-- <script src="../components/counter.js"></script> -->
              </body>
            </li>
            <!-- map -->
            <li>
              <a href="#">Event5</a>
              <body>
                <div class="count_container">
                  <div class="field">
                    <button class="button" id="down" @click="decrement7()">－</button>
                    <input type="text" value="0" class="inputtext" id="textbox7">
                    <button class="button" id="up" @click="increment7()">＋</button>
                  </div>
                  <button class="button resetbtn" id="reset" @click="reset7()">RESET</button>
                </div>
                <!-- <script src="../components/counter.js"></script> -->
              </body>
            </li>
          </ul>
        </nav>
        <!-- <p>This is App.</p> -->
      </div>
    </ul>
  </div>

</template>
<script>
export default {
  name: 'PriceView',
  methods: {
    increment() {
      const text = document.getElementById('textbox');
      text.textContent = text.value++;
    },
    decrement() {
      const text = document.getElementById('textbox');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset() {
      const text = document.getElementById('textbox');
      text.value = 0;
    },
    increment1() {
      const text = document.getElementById('textbox1');
      text.textContent = text.value++;
    },
    decrement1() {
      const text = document.getElementById('textbox1');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset1() {
      const text = document.getElementById('textbox1');
      text.value = 0;
    },
    increment2() {
      const text = document.getElementById('textbox2');
      text.textContent = text.value++;
    },
    decrement2() {
      const text = document.getElementById('textbox2');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset2() {
      const text = document.getElementById('textbox2');
      text.value = 0;
    },
    increment3() {
      const text = document.getElementById('textbox3');
      text.textContent = text.value++;
    },
    decrement3() {
      const text = document.getElementById('textbox3');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset3() {
      const text = document.getElementById('textbox3');
      text.value = 0;
    },
    increment4() {
      const text = document.getElementById('textbox4');
      text.textContent = text.value++;
    },
    decrement4() {
      const text = document.getElementById('textbox4');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset4() {
      const text = document.getElementById('textbox4');
      text.value = 0;
    },
    increment5() {
      const text = document.getElementById('textbox5');
      text.textContent = text.value++;
    },
    decrement5() {
      const text = document.getElementById('textbox5');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset5() {
      const text = document.getElementById('textbox5');
      text.value = 0;
    },
    increment6() {
      const text = document.getElementById('textbox6');
      text.textContent = text.value++;
    },
    decrement6() {
      const text = document.getElementById('textbox6');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset6() {
      const text = document.getElementById('textbox6');
      text.value = 0;
    },
    increment7() {
      const text = document.getElementById('textbox7');
      text.textContent = text.value++;
    },
    decrement7() {
      const text = document.getElementById('textbox7');
      //0以下にはならないようにする
      if(text.value >= 1) {
        text.textContent = text.value--;
      }
    },
    reset7() {
      const text = document.getElementById('textbox7');
      text.value = 0;
    }
    
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

/* Price Table */
#price_table table {
  width: 60%;
}

#price_table caption {
  font-size: 2em;
}

#price_table th,
#price_table td {
  width: 20%;
  padding: 1em 0.5em;
  /* 枠線：黒色の実線を1pxの太さで引く */
  border: 1px solid black;
}

#price_table div {
  padding-right: 0.5em;
  text-align: right;
  color: aqua;
}


.Purchase_Content {
  font-size: 16pt;
  text-decoration: none;
}

#Purchase_Items {
  margin: 0 auto;
  position: relative;
  /* width: 80vw; */
  min-width: 768px;
  
}

nav {
  position: relative;
  z-index: 999;
}

.purchase_item {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.purchase_item li {
  position: relative;
  flex: 1;
  text-align: center;
  text-decoration: none;
  border: 6px solid white;
}

.purchase_item a {
  text-align: left;
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: #0080ff;
}

.Age_Content {
  font-size: 16pt;
}

#Age_Items {
  margin: 0 auto;
  position: relative;
  /* width: 80vw; */
  min-width: 768px;
}

nav {
  position: relative;
  z-index: 999;
}

.age_item {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.age_item li {
  position: relative;
  flex: 1;
  text-align: center;
  border: 3px solid blue;
}

.age_item a {
  text-align: left;
  display: block;
  padding: 1rem;
  color: #0080ff;
}

body {
  margin: 0;
  width: 100%;
}

.count_container {
  width: 100px;
  margin: auto auto auto;
}

.field {
  display: flex;
}

.inputtext {
  color:rgba(43, 32, 32, 0.76) ;
  font-size: 18px;
  border-left: 0;
  border-right: 0;
  width: 80px;
  line-height: 3rem;
  text-align: center;
  border: 1px solid #D7DBDD;
  padding: 0 10px;
}

.button {
  color:rgba(43, 32, 32, 0.76) ;
  font-size: 18px;
  cursor: pointer;
  /* padding: 5px 25px; */
  background-color: white;
  border: 1px solid #D7DBDD;
  border-radius: 0;
  outline: 0;
}

.resetbtn {
  margin: 20px 0 0 65px;
}

</style>
