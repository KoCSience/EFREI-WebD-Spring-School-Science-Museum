<template>
    <div class="access">
        <div id="topPart">
            <div id="discription">
                <div><h2>Address : xxxxxxxxxxx</h2></div>
                <div><h2>Station : xxxxxxxxxxx</h2></div>
            </div>
            <div><img src="../assets/mapImg_sample.png"></div>
        </div>
        <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7406.642636528158!2d2.373638182909615!3d48.763529443373606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6741390a12f2d%3A0x81bcc927555c80c0!2sFontaine%20des%20Bois%2C%20Parcs%20et%20Jardins!5e0!3m2!1sfr!2sfr!4v1709734263220!5m2!1sfr!2sfr">
        </iframe>
    </div>
</template>

<style>
.access{
    width:600px;
    height:auto;
    position: relative;
}

.googlemap{
    width: 600px;
    height: 350px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}
#topPart{
    display: flex;
    justify-content: space-between;
}
#discription{
    /* 文字と地図を横並べにする */
    display: flex;
    flex-direction: column;

    gap: 20px 10px;
    margin-top: 10px;
}

h2{
    color: white;
}

img{
    width:300px;
    margin-left: auto;
}

</style>

