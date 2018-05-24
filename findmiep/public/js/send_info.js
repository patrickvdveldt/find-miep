// Begin/stop tijd & formulier animation

$(function(){
  var stop = document.getElementById('found-miep');
  var formulier = document.getElementById('formulier');

  stop.addEventListener('click',toggleDisplay);

  function toggleDisplay(){

    var snow = jQuery(".miep-animated");
    var tl = new TimelineMax({repeat:-1});
    tl.set(snow, {autoAlpha:0});

    var curtime = document.getElementById('curtime');
    var curTimeNow = curtime.value;
    var tl = new TimelineLite
    formWeergave.classList.add('weergave');
    tl.to("#formulier", 0.5,{scale: 1, ease: Back.easeOut});

    gameOpacity.classList.add('opacity');

    var seconds = document.getElementById('seconds').innerHTML;
    var tens = document.getElementById('tens').innerHTML;
    var time = seconds + tens;
    console.log(time);

    clearInterval(Interval);

    curtime.value = time;

    jQuery("html, body").animate({scrollTop: 0}, 500);

    formulier.addEventListener('submit', function(e){

        e.preventDefault();console.log(time);
        insertClain(time);



    })

  }

//Tijd opslaan en form zenden naar Database!
 var checked = false;

  function insertClain(time){

    console.log(time);
    var naam = document.forms["form"]["naam"];
    var bedrijf = document.forms["form"]["bedrijf"];
    var email = document.forms["form"]["email"];
    var actie = document.forms["form"]["actie"];
    var trimNaam = naam.value.trim();
    var trimBedrijf = bedrijf.value.trim();

    var xhr;

     if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();

        } else {

           xhr = new ActiveXObject("Microsoft.XMLHTTP");
       }

       var naam = document.getElementById('naam');
       var email = document.getElementById('email');
       var bedrijf = document.getElementById('bedrijf');
       var actie = document.getElementById('actie');

       if (actie.checked) {
         checked = true;
       }
       else {
         checked = false;
       }

       var data = 'naam='+trimNaam+'&email='+email.value+'&bedrijf='+trimBedrijf+'&tijd='+time+'&actie='+checked;
       var formdata = new FormData(formulier);
       var error  = document.querySelectorAll('.error');
       error[0].innerHTML = '';
       error[1].innerHTML = '';
       error[2].innerHTML = '';
       error[3].innerHTML = '';

       xhr.open('POST','../findmiep/models/xhr/insert_info.php',true);
       xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function(){

console.log(xhr.responseText);

      if(this.readyState ==  4 && this.status == 200)
      {

        if(xhr.responseText == ''){
        window.location.href="main.php?page=form";
        return false;
        }

        var errors = JSON.parse(xhr.responseText);
        console.log(errors);
        //var nameErr = document.querySelector('.nameErr');console.log(nameErr);
        var error  = document.querySelectorAll('.error');

        if (errors.nameErr) {
          error[0].innerHTML = errors.nameErr;
        }

        if (errors.emailErr) {
          error[1].innerHTML = errors.emailErr;

        }

        if (errors.bedrijfErr) {
          error[2].innerHTML = errors.bedrijfErr;
        }

        if (errors.actieErr) {
          error[3].innerHTML = errors.actieErr;
        }

      }

    }

    xhr.send(data);

    /*jQuery.ajax({
        url: '../models/xhr/send_info.php',
        method: 'POST',
        data: {data:formdata},
        success: function(e) {
            console.log(e);
        },
        dataType: 'json'
      });*/
  }
})
