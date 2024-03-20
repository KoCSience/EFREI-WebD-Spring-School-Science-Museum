<template>
  <div class="price">
    <div class="Purchase_Items">
      <div class="purchase_item">
        Entry
        <div>
          adlut - 30￡ <button @click="increment(0)">＋</button>
          {{ counts[0] }}
          <button @click="decrement(0)">－</button>
        </div>
        <div>
          student - 20￡ <button @click="increment(1)">＋</button>
          {{ counts[1] }}
          <button @click="decrement(1)">－</button>
        </div>
        <div>
          child - 10￡ <button @click="increment(2)">＋</button>
          {{ counts[2] }}
          <button @click="decrement(2)">－</button>
        </div>
      </div>
      <div class="purchase_item">
        Event1 - 10￡ <button @click="increment(3)">＋</button> {{ counts[3] }}
        <button @click="decrement(3)">－</button>
      </div>
      <div class="purchase_item">
        Event2 - 5￡ <button @click="increment(4)">＋</button> {{ counts[4] }}
        <button @click="decrement(4)">－</button>
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
      // Entryの大人、子供、学生、Event1、Event2の数量
      counts: [0, 0, 0, 0, 0],
      // Entryの大人、子供、学生、Event1、Event2の価格
      prices: [30, 20, 10, 10, 5]
    }
  },
  computed: {
    totalAmount() {
      return this.counts.reduce((total, count, index) => total + count * this.prices[index], 0)
    }
  },
  methods: {
    increment(index) {
      this.counts[index]++
    },
    decrement(index) {
      if (this.counts[index] > 0) {
        this.counts[index]--
      }
    },
    purchase() {
      if (this.totalAmount > 0) {
        alert(`You purchased tickets for a total of ${this.totalAmount}￡.`)
        this.counts = [0, 0, 0, 0, 0] // 購入後、数量をリセット
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
