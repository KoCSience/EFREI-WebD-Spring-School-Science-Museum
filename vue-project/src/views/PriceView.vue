<script setup>
import axios from 'axios'
</script>

<template>
  <div class="price">
    <div class="Purchase_Items">
      <div class="purchase_item">
        Entry
        <div>
          adlut - 30￡ <button @click="increment(0)">＋</button>
          {{ cart.counts[0] }}
          <button @click="decrement(0)">－</button>
        </div>
        <div>
          student - 20￡ <button @click="increment(1)">＋</button>
          {{ cart.counts[1] }}
          <button @click="decrement(1)">－</button>
        </div>
        <div>
          child - 10￡ <button @click="increment(2)">＋</button>
          {{ cart.counts[2] }}
          <button @click="decrement(2)">－</button>
        </div>
      </div>
      <div class="purchase_item">
        See-through food - 10￡ <button @click="increment(3)">＋</button> {{ cart.counts[3] }}
        <button @click="decrement(3)">－</button>
      </div>
      <div class="purchase_item">
        Illumination - 5￡ <button @click="increment(4)">＋</button> {{ cart.counts[4] }}
        <button @click="decrement(4)">－</button>
      </div>
      <div class="purchase_item">
        Japan collaboration - 10￡ <button @click="increment(5)">＋</button>
        {{ cart.counts[5] }}
        <button @click="decrement(5)">－</button>
      </div>
      <div class="purchase_item">
        Accommodation Campaign - 5￡ <button @click="increment(6)">＋</button>
        {{ cart.counts[6] }}
        <button @click="decrement(6)">－</button>
      </div>
      <div class="purchase_item">
        Music Fes - 10￡ <button @click="increment(7)">＋</button> {{ cart.counts[7] }}
        <button @click="decrement(7)">－</button>
      </div>
      <div class="purchase_item">
        Retro games - 5￡ <button @click="increment(8)">＋</button> {{ cart.counts[8] }}
        <button @click="decrement(8)">－</button>
      </div>
    </div>
    <div>
      <h3>sum: {{ totalAmount }}￡</h3>
      <button @click="purchase">Purchase</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceView',
  data() {
    return {
      cart: {
        // Entryの大人、子供、学生、Event1、Event2の数量
        counts: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        // Entryの大人、子供、学生、Event1、Event2の価格
        prices: [30, 20, 10, 10, 5, 10, 5, 10, 5]
      }
    }
  },
  computed: {
    totalAmount() {
      return this.cart.counts.reduce(
        (total, count, index) => total + count * this.cart.prices[index],
        0
      ) //  ちなみにもし本番でこれは不正されるのでよくない
    }
  },
  methods: {
    increment(index) {
      this.cart.counts[index]++
    },
    decrement(index) {
      if (this.cart.counts[index] > 0) {
        this.cart.counts[index]--
      }
    },
    async purchase() {
      if (this.totalAmount > 0) {
        const total = this.totalAmount
        try {
          const result = (
            await axios.post('/api/cart/purchace', {
              cart: this.cart,
              total: total
            })
          ).data //get user information
          alert(`You purchased tickets for a total of ${this.totalAmount}￡.`)
          console.log(result.message)
          this.cart.counts = [0, 0, 0, 0, 0, 0, 0, 0, 0] // 購入後、数量をリセット
        } catch (error) {
          //display error message in console
          alert(`You purchased tickets for a total of ${this.totalAmount}￡.__.`)
          console.log('error', error)
        }
      } else {
        alert('購入するチケットの枚数を選択してください。')
      }
    }
  }
}
</script>

<style>
/* 全体の背景色とテキスト色を設定 */
body {
  background-color: #000; /* 背景色を黒に */
  color: #fff; /* テキスト色を白に */
  font-family: 'Arial', sans-serif;
}

/* 購入アイテムと数量調整セクションのスタイリング */
.price {
  padding: 20px;
}

.Purchase_Items {
  margin-bottom: 20px;
}

.purchase_item {
  background-color: #222; /* アイテム背景色 */
  color: #ddd; /* アイテムテキスト色 */
  padding: 10px;
  margin-bottom: 5px;
  cursor: pointer;
}

/* 数量調整ボタンのスタイル */
button {
  background-color: #555; /* ボタン背景色 */
  color: #fff; /* ボタンテキスト色 */
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #777; /* ホバー時の背景色 */
}

/* 数量表示のスタイル */
span {
  padding: 0 10px;
}
</style>
