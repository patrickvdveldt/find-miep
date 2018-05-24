//OPENEN BIJ WINDOW
window.onload = function () {

      }

//OPTELLEN VAN TIMER
      var seconds = 00;
      var tens = 00;
      var appendTens = document.getElementById("tens");
      var appendSeconds = document.getElementById("seconds");
      var buttonStart = document.getElementById('button-start');
      var stop = document.getElementById('stop');
      var Interval;

      function startTimer() {

          tens++;

          if (tens < 9) {
              appendTens.innerHTML = tens;
          }
          if (tens > 9) {
              appendTens.innerHTML = tens;
          }
          if (tens > 99) {
              console.log("seconds");
              seconds++;
              appendSeconds.innerHTML = seconds;
              tens = 0;
              appendTens.innerHTML = "0" + 0;
          }
          if (seconds > 9) {
              appendSeconds.innerHTML = seconds;
          }
        }

      createGameBoard(jQuery('.game'), 10, 104);
      var formWeergave = document.getElementById('formulier');
      var gameOpacity = document.getElementById('opacity');
      var stop = document.getElementById('found-miep');
      var curtime = document.getElementById('curtime');
      var bedankje = document.getElementById('bedankje');

//GAME-INTRO
var gameIntro = document.getElementById('uitleg');
var tl = new TimelineLite;console.log(tl);
document.getElementById('game-start').addEventListener('click', startGame);

  function startGame(){
  Interval = setInterval(startTimer, 1000);
  gameIntro.classList.add('verberg');
  gameOpacity.classList.add('opacity');


//IN-UIT FADEN VAN DE GAME

  var snow = jQuery(".game");
  var tl = new TimelineMax({repeat:-1});
  var bezierPath = [{ x: 5, y: 4 }, { x: -5, y: 8 }, { x: 5, y: 12 },{ x: -5, y: 16 }];

  tl.set(snow, {autoAlpha:0});
  tl.from(snow, 8, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, 0);

}

//MEERDERE DIVS DOOR MIDDEL VAN DE ONDERSTAANDE LOOP
function createGameBoard(node, mieps, count) {
  var randomPlaceMiep = Math.floor(Math.random() * count) + 1;
  console.log(randomPlaceMiep);
  for(var i=1; i<=count; i++) {
      var randImg = Math.floor(Math.random() * mieps) + 1;
      var img  = '<img class="miep-animated" src="public/images/svg/miep-animated-'+randImg+'.svg" alt="">';
      if(i == randomPlaceMiep) {
        img = img+'<img id="found-miep" class="miep-animated" src="public/images/svg/miep-animated-11.svg" alt="">';
      }
      jQuery(node).append(img)
      }

  /// GAME ANIMATION
  var tl = new TimelineLite;console.log(tl);
  tl.to('#uitleg', 0.1, {opacity:1, transformOrigin:"0% 50%",  ease: Power2.easeOut, clearProps:"scale"}, 0.1, "-=1.0");
  tl.to('.game', 0.6, {opacity:1, transformOrigin:"0% 50%",  ease: Power2.easeOut, clearProps:"scale"}, 0.1, "-=1.0");
}

/*}*/
//FORMULIER HIDDEN & ACTIVE WEERGAVE
