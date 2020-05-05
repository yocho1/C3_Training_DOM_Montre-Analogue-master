// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function  demarrerLaMontre(){
    var time = new Date();
    var hour = time.getHours() % 12;
    var minute = time.getMinutes();
    var second = time.getSeconds();

     var hourDeg = (hour * 30 )+ (0.5 * minute);  //every hour, 30deg 30/60
     var minuteDeg = (minute * 6) + ( 0.1 * second); // every minute , 6 6/60
     var secondeDeg = second * 6; // 360/60

     AIGUILLEHR.style.transform = 'rotate(' + hourDeg +'deg)';
     AIGUILLEMIN.style.transform = 'rotate(' + minuteDeg +'deg)';
     AIGUILLESEC.style.transform = 'rotate(' + secondeDeg + 'deg)';
     var interval = setInterval(demarrerLaMontre, 1000);};


     demarrerLaMontre();