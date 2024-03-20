(() => {
  //HTMLのid値を使って以下のDOM要素を取得
  const downbutton = document.getElementById('down');
  const upbutton = document.getElementById('up');
  const text = document.getElementById('textbox');
  const reset = document.getElementById('reset');

  //ボタンが押されたらカウント減
  downbutton.addEventListener('click', () => {
  //0以下にはならないようにする
  if(text.value >= 1) {
    text.textContent=text.value--;
  }
  });

  //ボタンが押されたらカウント増
  upbutton.addEventListener('click', () => {
    text.textContent=text.value++;
  })

  //ボタンが押されたら0に戻る
  reset.addEventListener('click', () => {
    text.value = 0;
  })

})();