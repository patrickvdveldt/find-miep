<!DOCTYPE html>
<html lang="nl">

<?php

   require 'templates/head.php';

 ?>

<body>
    <header>
        <div id="logo">
            <a href="https://redbutton.nl/"><img id="logo2" src="public/images/logo-white.png" alt="logo"></a>
        </div>
      <!--  <div class="fullscreen-background">
          <video muted loop autoplay poster="">
            <source src="public/video/Red_Button_v6.mp4" type="video/mp4">

          </video>
        </div> -->
    </header>
    <main>
        <div class="home">
            <div class="intro">
                <h2 id="titel2" >Where's Miep?</h2>
                <p id="tekst2">Kan jij ons helpen Miep te vinden? <br>
                Maak hierbij kans op mooie kortingen, een leuk cadeautje of een heerlijke lunch op onze kosten! <br><br>
                Hoeveel seconden doe jij erover?
                 </p>
                <a href="main.php?page=game"><input id="button-start" type="button" value="Ga verder!" ></a>
            </div>
            <img id="miep-groot" src="public/images/svg/miep-animated-5.svg" alt="miep">
        </div>
    </main>
    <footer id="home-footer">

    </footer>

    <!--<script src="../public/js/jquery.js"></script>-->

</body>
</html>
