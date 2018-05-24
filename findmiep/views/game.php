<!DOCTYPE html>
<html lang="nl">

<?php

   require 'templates/head.php';

 ?>

<body id="game">
  <header>
    <div id="logo">
      <a href="https://redbutton.nl/"><img id="logo2" src="public/images/logo-white.png" alt="logo"></a>
    </div>
  </header>

  <main>
    <div id="timer">
      <p> <span>Tijd: </span><span id="seconds"></span><span id="tens"></span></p>
    </div>

    <div id="opacity">
      <div class="game">

      </div>
    </div>

    <div id="uitleg">
            <h2 id="titel3">Kan jij ons helpen Miep terug te vinden?</h2>
            <p id="tekst3">Miep is zoek! Hij is te herkennen aan een rood mobieltje in zijn handjes. <br>
            Hoe lang doe jij er over?
            Druk hieronder op start om te beginnen met zoeken en de timer te starten! </p>
            <button id="game-start" type="submit">Start!</button>
    </div>

    <div class="divform">

    <form name="form" id="formulier" action="" method="" novalidate>
      <h2>Geweldig! Je hebt Miep gevonden!</h2>
      <p>Geef hieronder jouw gegevens aan ons door zodat wij contact met je kunnen opnemen.
      </p>
      <div class="labelerror">
         <label for="naam">Naam: * &nbsp;</label>
         <span class="error"></span>
      </div>
      <input class="inputform" type="text" name="naam" id="naam" min="2" >
      <br>

      <div class="labelerror">
         <label for="email">Email: * &nbsp;</label>
         <span class="error"></span>
      </div>
      <input class="inputform" type="email" name="email" id="email" >
      <br>

      <div class="labelerror">
         <label for="bedrijf">Bedrijf: * &nbsp;</label>
         <span class="error"></span>
      </div>
      <input class="inputform" type="text" name="bedrijf" id="bedrijf" min="2">
      <br>
      <label for="tijd">Seconden:</label>
      <input class="inputform" type="text" name="tijd" id="curtime" readonly>
      <br>

      <div class="labelerror">
        <label for="actie">
          <input class="checkboxes" type="checkbox" name="actie[]" id="actie" > Ik ga akkoord met de <a href="../"> actievoorwaarden</a>! &nbsp;
        </label>
        <span class="error"></span>
      </div>


      <br>
      <button type="submit" name='submit' id="claim">Claim je prijs!</button>

      <img id="miep-medium" src="public/images/svg/miep-animated-11.svg" alt="miep">

    </form>

    </div>

<?php //require '../findmiep/models/xhr/insert_info.php' ?>

    <button id="animate">animate</button>

  </main>

  <!--<script src="../public/js/jquery.js"></script>-->
  <script src="https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js"></script>
  <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText.min.js"></script>
  <script src="public/js/main.js"></script>
  <script src="public/js/form.js"></script>
  <script src="public/js/send_info.js"></script>



</body>

</html>
