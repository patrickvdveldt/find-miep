jQuery(function(){

  var tl = new TimelineLite;console.log(tl);
  tl.to('#bedankje', 0.1, {opacity:1, transformOrigin:"0% 50%",  ease: Power2.easeInOut, clearProps:"scale"}, 0.1, "-=1.0");

})

/*jQuery('#formulier').submit(function(){
  var naam = document.getElementById('naam');
  var email = document.getElementById('email');
  var bedrijf = document.getElementById('bedrijf');
  var actie = document.getElementById('actie');

  //  var curTimenow = curTime.value;console.log(curTimenow);
  let xhr;

   if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();

      } else {

         xhr = new ActiveXObject("Microsoft.XMLHTTP");
     }

  xhr.onreadystatechange = function(){

    if(this.readyState ==  4 && this.status == 200)
    {

      console.log(xhr.responseText);

      if(xhr.responseText=="toegevoegd"){
        window.location.href="main.php?page=form";
      }

    }

  }
  xhr.open('GET','models/xhr/send_info.php?naam='+naam.value+'&email='+email.value+'&bedrijf='+bedrijf.value+'&curtime='+time+'&actie='+actie.value,true);
  xhr.send();


});*/
