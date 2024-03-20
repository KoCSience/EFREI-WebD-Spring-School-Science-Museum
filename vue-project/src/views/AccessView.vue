<template>
  <div class="access">
    <div id="topPart">
      <div id="discription">
        <div><h2>Address : 48 Hopton St, London SE1 9JB UK</h2></div>
        <div><h2>Station : Blackfriars Station</h2></div>
        <div><h2>Bus : Blackfriars Station South Entrance</h2></div>
      </div>
      <br />

      <div><img id="accessmap" src="../assets/AccessMap.png" /></div>
    </div>
    <iframe
      class="googlemap"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d885.3825472397217!2d0.006230092888104981!3d51.53787554360933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sja!2sfr!4v1710241138970!5m2!1sja!2sfr"
      width="80%"
      height="300"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style>
.googlemap {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  /* object-fit: contain; */
}
#topPart {
  display: flex;
  justify-content: space-around;
}
#discription {
  /* 文字と地図を横並べにする */
  display: flex;
  flex-direction: column;

  gap: auto auto;
  margin-top: 10px;
}

h2 {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

#accessmap {
  width: 800px;
  margin-left: auto;
}
</style>
