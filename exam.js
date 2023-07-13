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
function two() {
    let two = document.getElementById("two")
    let scoto = document.getElementById("scoto")
    if (two.style.height=="auto") {
       two.style.height="65px"
       scoto.style.rotate="180deg"
}
else{
   two.style.height="auto"
    scoto.style.rotate="90deg"
}
}
function three() {
    let three = document.getElementById("three")
    let scote = document.getElementById("scote")
    if (three.style.height=="auto") {
       three.style.height="65px"
       scote.style.rotate="180deg"
}
else{
   three.style.height="auto"
    scote.style.rotate="90deg"
}
}
function four() {
    let four = document.getElementById("four")
    let scotr = document.getElementById("scotr")
    if (four.style.height=="auto") {
       four.style.height="65px"
       scotr.style.rotate="180deg"
}
else{
   four.style.height="auto"
    scotr.style.rotate="90deg"
}
}
function five() {
    let five = document.getElementById("five")
    let scotve = document.getElementById("scotve")
    if (five.style.height=="auto") {
       five.style.height="65px"
       scotve.style.rotate="180deg"
}
else{
   five.style.height="auto"
    scotve.style.rotate="90deg"
}
}
function six() {
    let six = document.getElementById("six")
    let scotx = document.getElementById("scotx")
    if (six.style.height=="auto") {
       six.style.height="65px"
       scotx.style.rotate="180deg"
}
else{
   six.style.height="auto"
    scotx.style.rotate="90deg"
}
}

function seven() {
    let seven = document.getElementById("seven")
    let scotn = document.getElementById("scotn")
    if (seven.style.height=="auto") {
       seven.style.height="65px"
       scotn.style.rotate="180deg"
}
else{
   seven.style.height="auto"
    scotn.style.rotate="90deg"
}
}

function eight() {
    let eight = document.getElementById("eight")
    let scott = document.getElementById("scott")
    if (eight.style.height=="auto") {
       eight.style.height="65px"
       scott.style.rotate="180deg"
}
else{
   eight.style.height="auto"
    scott.style.rotate="90deg"
}
}

function nine() {
    let nine = document.getElementById("nine")
    let scotne = document.getElementById("scotne")
    if (nine.style.height=="auto") {
       nine.style.height="65px"
       scotne.style.rotate="180deg"
}
else{
   nine.style.height="auto"
    scotne.style.rotate="90deg"
}
}

function ten() {
    let ten = document.getElementById("ten")
    let scoten = document.getElementById("scoten")
    if (ten.style.height=="auto") {
       ten.style.height="65px"
       scoten.style.rotate="180deg"
}
else{
   ten.style.height="auto"
    scoten.style.rotate="90deg"
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
var machea = document.getElementsByClassName("machea");
var machean = document.getElementsByClassName("machean");
var ber = document.getElementsByClassName("ber");
    if (localStorage.getItem("language")==="arabic") {
        arabic.innerHTML="عربي"
        maths.innerHTML="رياضة"
        english.innerHTML="انجليزي"
        french.innerHTML="فرنساوي"
        physics.innerHTML="فيزياء"
        chemistry.innerHTML="كيمياء"
        biology.innerHTML="احياء"
        geography.innerHTML="جغرافيا"
        history.innerHTML="تاريخ"
        philosophy.innerHTML="فلسفة"
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
          for (var i = 0; i < machea.length; i++) {
            machea[i].innerHTML="5";
          }
          for (var i = 0; i < machean.length; i++) {
            machean[i].innerHTML="6";
          }
          for (var i = 0; i < ber.length; i++) {
            ber[i].innerHTML="الدرجة 40/40";
          }
    }