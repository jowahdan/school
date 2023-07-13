

let arabic = document.getElementById("arabic")
let maths = document.getElementById("maths")
let english = document.getElementById("english")
let french = document.getElementById("french")
let physics = document.getElementById("physics")
let chemistry = document.getElementById("chemistry")
let biology = document.getElementById("biology")
let geography = document.getElementById("geography")
let history = document.getElementById("history")
let philosophy = document.getElementById("philosophy")
var ma = document.getElementsByClassName("ma");
var ch = document.getElementsByClassName("ch");
var mac = document.getElementsByClassName("mac");
var mach = document.getElementsByClassName("mach");
var mache = document.getElementsByClassName("mache");
var ber = document.getElementsByClassName("ber");
if (localStorage.getItem("language")==="arabic") {
    arabic.innerHTML="عربي"
    for (var i = 0; i < ma.length; i++) {
        ma[i].innerHTML="1";
      }
      for (var i = 0; i < ch.length; i++) {
        ch[i].innerHTML="امتحان";
      }
      for (var i = 0; i < mac.length; i++) {
        mac[i].innerHTML="2";
      }
      for (var i = 0; i < mach.length; i++) {
        mach[i].innerHTML="3";
      }
      for (var i = 0; i < mache.length; i++) {
        mache[i].innerHTML="4";
      }
      for (var i = 0; i < ber.length; i++) {
        ber[i].innerHTML="80 طالب";
      }
}


if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
    }
    else{
    document.body.style.backgroundColor="rgb(24, 23, 23)"
    var elements = document.getElementsByClassName("al");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor="rgb(66, 64, 64)";
    }
    var elements = document.getElementsByClassName("arr");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor="rgb(48, 47, 47)";
    }
    var elements = document.getElementsByClassName("col");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor="rgb(66, 64, 64)";
    }
    }


    function one() {
        let one = document.getElementById("one")
        let scot = document.getElementById("scot")
        if (one.style.height=="auto") {
           one.style.height="65px"
           scot.style.rotate="180deg"
    }
    else{
       one.style.height="auto"
        scot.style.rotate="90deg"
    }
    }



     