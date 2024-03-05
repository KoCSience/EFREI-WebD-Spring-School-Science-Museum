<template>
  <div class="price">
        <table id="price_table">
            <caption><legend>Price</legend></caption>
            <tr>
              <th>Children</th>
              <th>Students</th>
              <th>Adults</th>
            </tr>
            <tr>
              <td><div>Xxx €</div></td>
              <td><div>Xxx €</div></td>
              <td><div>Xxx €</div></td>
            </tr>
        </table>
  </div>
</template>

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

#price_table th, #price_table td {
  width: 20%;
  padding : 1em 0.5em;
  /* 枠線：黒色の実線を1pxの太さで引く */
  border: 1px solid black;
}


#price_table div {
  padding-right: 0.5em;
  text-align: right;
  color: aqua;
}
</style>
