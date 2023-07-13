let nam = document.getElementById("fi") 
let put = document.getElementById("name") 

function di(params) {
   
   let ok = document.getElementById("ok") 
  
   let pene = document.getElementById("pene") 
   put.style.display="flex"
   ok.style.display="flex"
   put.value.length ="10"
   pene.style.display="none"
   nam.style.display="none"
}
function show(params) {
    
    let ok = document.getElementById("ok") 
   
    let pene = document.getElementById("pene") 
    put.style.display="none"
   ok.style.display="none"
   nam.style.display="flex"
   pene.style.display="flex"
   
   
   if (put.value.length===0) {
    nam.innerHTML= nam.innerHTML
    localStorage.setItem("date","notsave")
   } else {
      nam.innerHTML= put.value
      localStorage.setItem("date","save")
      localStorage.setItem("dame",put.value)
   }
}
if (localStorage.getItem("date")==="save") {
   
     nam.innerHTML= localStorage.getItem("dame")
}
else{
   nam.innerHTML= localStorage.getItem("dame")
}
let namer = document.getElementById("fir") 
 
function dire(params) {
   let putr = document.getElementById("namer") 
   let okr = document.getElementById("okr") 
   
   let pener = document.getElementById("pener") 
   putr.style.display="flex"
   okr.style.display="flex"
   putr.value.length ="10"
   pener.style.display="none"
   namer.style.display="none"
}
function showr(params) {
    let putr = document.getElementById("namer") 
    let okr = document.getElementById("okr") 
    
    let pener = document.getElementById("pener") 
    putr.style.display="none"
   okr.style.display="none"
   namer.style.display="flex"
   pener.style.display="flex"
   if (putr.value.length===0) {
    namer.innerHTML= namer.innerHTML
    localStorage.setItem("dater","notsave")
   } else {
    namer.innerHTML= putr.value
    localStorage.setItem("dater","save")
    localStorage.setItem("damer",putr.value)
   }
}
if (localStorage.getItem("dater")==="save") {
   
   namer.innerHTML= localStorage.getItem("damer")
}
else{
 namer.innerHTML= localStorage.getItem("damer")
}
let namey = document.getElementById("fiy") 

function diy(params) {
   let puty = document.getElementById("namey") 
   let oky = document.getElementById("oky") 
   
   let peney = document.getElementById("peney") 
   puty.style.display="flex"
   oky.style.display="flex"
   puty.value.length ="10"
   peney.style.display="none"
   namey.style.display="none"
}
function showy(params) {
    let puty = document.getElementById("namey") 
    let oky = document.getElementById("oky") 
    
    let peney = document.getElementById("peney") 
    puty.style.display="none"
   oky.style.display="none"
   namey.style.display="flex"
   peney.style.display="flex"
   if (puty.value.length===0) {
    namey.innerHTML= namey.innerHTML
    localStorage.setItem("daterm","notsave")
   } else {
    namey.innerHTML= puty.value
    localStorage.setItem("daterm","save")
    localStorage.setItem("damerm",puty.value)
   }
}
if (localStorage.getItem("daterm")==="save") {
   
   namey.innerHTML= localStorage.getItem("damerm")
}
else{
 namey.innerHTML= localStorage.getItem("damerm")
}
let nameo = document.getElementById("fio") 

function dio(params) {
   let puto = document.getElementById("nameo") 
   let oko = document.getElementById("oko") 
   
   let peneo = document.getElementById("peneo") 
   puto.style.display="flex"
   oko.style.display="flex"
   puto.value.length ="10"
   peneo.style.display="none"
   nameo.style.display="none"
}
function showo(params) {
    let puto = document.getElementById("nameo") 
    let oko = document.getElementById("oko") 
    
    let peneo = document.getElementById("peneo") 
    puto.style.display="none"
   oko.style.display="none"
   nameo.style.display="flex"
   peneo.style.display="flex"
   if (puto.value.length===0) {
    nameo.innerHTML= nameo.innerHTML
    localStorage.setItem("datermi","notsave")
   } else {
    nameo.innerHTML= puto.value
    localStorage.setItem("datermi","save")
    localStorage.setItem("damermi",puto.value)
   }
}
if (localStorage.getItem("datermi")==="save") {
   
   nameo.innerHTML= localStorage.getItem("damermi")
}
else{
 nameo.innerHTML= localStorage.getItem("damermi")
}
let names = document.getElementById("fis") 

function dis(params) {
   let puts = document.getElementById("names") 
   let oks = document.getElementById("oks") 
   
   let penes = document.getElementById("penes") 
   puts.style.display="flex"
   oks.style.display="flex"
   puts.value.length ="10"
   penes.style.display="none"
   names.style.display="none"
}
function shows(params) {
    let puts = document.getElementById("names") 
    let oks = document.getElementById("oks") 
    
    let penes = document.getElementById("penes") 
    puts.style.display="none"
   oks.style.display="none"
   names.style.display="flex"
   penes.style.display="flex"
   if (puts.value.length===0) {
    names.innerHTML= names.innerHTML
    localStorage.setItem("datermin","notsave")
   } else {
    names.innerHTML= puts.value
    localStorage.setItem("datermin","save")
    localStorage.setItem("damermin",puts.value)
   }
}
if (localStorage.getItem("datermin")==="save") {
   
   names.innerHTML= localStorage.getItem("damermin")
}
else{
 names.innerHTML= localStorage.getItem("damermin")
}
function li(params) {
   localStorage.setItem("theme","light")
   document.body.style.backgroundColor="rgb(206, 211, 211)"
   var elements = document.getElementsByTagName("h1");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "black";
}
var elements = document.getElementsByTagName("h2");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "black";
}
}

function da(params) {
   localStorage.setItem("theme","dark")
   document.body.style.backgroundColor="rgb(24, 23, 23)"
   var elements = document.getElementsByTagName("h1");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "white";
}
var elements = document.getElementsByTagName("h2");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "white";
}
}
if (localStorage.getItem("theme") === "light") {
  document.body.style.backgroundColor = "rgb(206, 211, 211)";
//  let dm = document.getElementById("lm")
//  dm.value="light"
  var elements = document.getElementsByTagName("h1");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }

  var elements = document.getElementsByTagName("h2");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
  }
} else {
  document.body.style.backgroundColor = "rgb(24, 23, 23)";

  var elements = document.getElementsByTagName("h1");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
  }

  var elements = document.getElementsByTagName("h2");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
  }
}

function arab(params) {
let mode =document.getElementById("mode")
let light =document.getElementById("light")
let dark =document.getElementById("dark")
let lang =document.getElementById("lang")
let namee =document.getElementById("text")
let id =document.getElementById("id")
let phone =document.getElementById("phone")
let phon =document.getElementById("phon")
let add =document.getElementById("add")
   localStorage.setItem("language","arabic")
   mode.innerHTML="الوضع" 
    light.innerHTML="مضئ"
    dark.innerHTML="مظلم"
    lang.innerHTML="اللغه"
    namee.innerHTML="الاسم"
    id.innerHTML="الرقم القومي"
    phone.innerHTML="رقم تليفون الطالب"
    phon.innerHTML=" رقم تليفون ولي الامر"
    add.innerHTML="العنوان بالتفصيل"
}
function eng(params) {
let mode =document.getElementById("mode")
let light =document.getElementById("light")
let dark =document.getElementById("dark")
let lang =document.getElementById("lang")
let namee =document.getElementById("text")
let id =document.getElementById("id")
let phone =document.getElementById("phone")
let phon =document.getElementById("phon")
let add =document.getElementById("add")
   localStorage.setItem("language","english")
   mode.innerHTML="mode" 
   light.innerHTML="light"
   dark.innerHTML="dark"
   lang.innerHTML="language"
   namee.innerHTML="name"
   id.innerHTML="National ID"
   phone.innerHTML="student's phone number"
   phon.innerHTML="Parent's phone number"
   add.innerHTML="Detailed address"
}



let mode =document.getElementById("mode")
let light =document.getElementById("light")
let dark =document.getElementById("dark")
let lang =document.getElementById("lang")
let namee =document.getElementById("text")
let id =document.getElementById("id")
let phone =document.getElementById("phone")
let phon =document.getElementById("phon")
let add =document.getElementById("add")
if (localStorage.getItem("language")==="arabic") {
    mode.innerHTML="الوضع" 
    light.innerHTML="مضئ"
    dark.innerHTML="مظلم"
    lang.innerHTML="اللغه"
    namee.innerHTML="الاسم"
    id.innerHTML="الرقم القومي"
    phone.innerHTML="رقم تليفون الطالب"
    phon.innerHTML=" رقم تليفون ولي الامر"
    add.innerHTML="العنوان بالتفصيل"
} else {
   mode.innerHTML="mode" 
   light.innerHTML="light"
   dark.innerHTML="dark"
   lang.innerHTML="language"
   namee.innerHTML="name"
   id.innerHTML="National ID"
   phone.innerHTML="student's phone number"
   phon.innerHTML="Parent's phone number"
   add.innerHTML="Detailed address"
}



function showPreview(event) {
   if (event.target.files.length > 0) {
       var src = URL.createObjectURL(event.target.files[0]);
       var preview = document.getElementById("em");
       preview.src = src;
       preview.style.display = "unset";
   }
}

