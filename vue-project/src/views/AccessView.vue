<template>
    <div class="access">
        <div id="topPart">
            <div id="discription">
                <div><h2>Address : xxxxxxxxxxx</h2></div>
                <div><h2>Station : xxxxxxxxxxx</h2></div>
                <div><h2>Bus : xxxxxxxxxxx</h2></div>
            </div>
            <div><img src="../assets/mapImg_sample.png"></div>
        </div>
        <iframe class="googlemap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d957.9470800797995!2d-0.13553268551919917!3d51.50104173473393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1709810629682!5m2!1sfr!2sfr" width="600" height="300" style="border:0;" allowfullscreen="false"></iframe>
    </div>
</template>

<style>
.googlemap{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}
#topPart{
    display: flex;
    justify-content: space-around;
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
    font-family:Arial, Helvetica, sans-serif;
}

img{
    width:300px;
    margin-left: auto;
}

</style>

