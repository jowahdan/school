if(localStorage.getItem("theme")==="light"){
  document.body.style.backgroundColor="whitesmoke"
  
  }
  else{
  document.body.style.backgroundColor="rgb(24, 23, 23)"
 var elements = document.getElementsByTagName("h2");
 for (var i = 0; i < elements.length; i++) {
   elements[i].style.color = "white";
}
var elements = document.getElementsByTagName("h1");
 for (var i = 0; i < elements.length; i++) {
   elements[i].style.color = "white";
}
let f = document.createElement("h1")
f.innerHTML="-1"
document.body.appendChild(f)
f.style.marginLeft="1250px"
f.style.marginTop="-728px"
f.style.color="white"

let fi = document.createElement("h1")
fi.innerHTML="-2"
document.body.appendChild(fi)
fi.style.marginLeft="1250px"
fi.style.marginTop="-8px"
fi.style.color="white"
let fe = document.createElement("h1")
fe.innerHTML="-3"
document.body.appendChild(fe)
fe.style.marginLeft="1250px"
fe.style.marginTop="-15px"
fe.style.color="white"

  }
  




  if (localStorage.getItem("language")==="arabic") {
    let over = document.getElementById("over")
    let alli = document.getElementById("alli")
    let hf = document.getElementById("hf")
    let repor = document.getElementById("repor")
    let nom = document.getElementById("no")
    let no = document.getElementById("nmbo")
    let now = document.getElementById("now")
    hf.style.marginLeft="-500px"
    // hf.style.width="px"
    over.innerHTML="التقييم العام"
    over.style.marginLeft="200px"
    alli.style.width="300px"
    alli.style.marginLeft="120px"
    var elements = document.getElementsByClassName("staro");
for (var i = 0; i < elements.length; i++) {
 elements[i].style.marginTop = "-4px";
 elements[i].style.marginRight = "5px";
}
repor.innerHTML="تقارير"
repor.style.marginLeft="480px"
no.style.marginLeft="280px"
nom.style.marginLeft="170px"
now.style.marginLeft="290px"
no.innerHTML="فاز بمسابقة نوابغ في الترم الأولى"
nom.innerHTML="يوجد به ثلاثة من الأوائل في العام الدراسي الأول"
now.innerHTML="لقد قام طلابه بعمل جمعية خيرية"
let f = document.createElement("h1")
f.innerHTML="-1"
document.body.appendChild(f)
f.style.marginLeft="1250px"
f.style.marginTop="-728px"
f.style.color="black"

let fi = document.createElement("h1")
fi.innerHTML="-2"
document.body.appendChild(fi)
fi.style.marginLeft="1250px"
fi.style.marginTop="-8px"
fi.style.color="black"
let fe = document.createElement("h1")
fe.innerHTML="-3"
document.body.appendChild(fe)
fe.style.marginLeft="1250px"
fe.style.marginTop="-15px"
fe.style.color="black"
}
  



let fir = document.getElementById("first")
let tw = document.getElementById("second")
let thre = document.getElementById("three")
let fou = document.getElementById("four")
let fiv = document.getElementById("five")

let si = document.getElementById("firste")
let seve = document.getElementById("seconde")
let eigh = document.getElementById("threee")
let nin = document.getElementById("foure")
let te = document.getElementById("fivee")

let h = document.getElementById("h")
let na = document.getElementById("n")
let m = document.getElementById("m")
let a = document.getElementById("a")
let y = document.getElementById("y")

let mo = document.getElementById("firs")
let ha = document.getElementById("secon")
let ma = document.getElementById("non")
let da = document.getElementById("none")
let fi = document.getElementById("fi")

let yo = document.getElementById("er")
let sen = document.getElementById("tu")
let fe = document.getElementById("gu")
let he = document.getElementById("le")
let sin = document.getElementById("so")

let sim = document.getElementById("hm")
let sevem = document.getElementById("nm")
let eighm = document.getElementById("mm")
let ninm = document.getElementById("am")
let teb = document.getElementById("ym")


let fa = document.getElementById("far")
let fam = document.getElementById("fam")
let famo = document.getElementById("famo")
let famou = document.getElementById("famou")
let famous = document.getElementById("famous")

let pae = document.getElementById("fare")
let pam = document.getElementById("fame")
let pamo = document.getElementById("famoe")
let pamou = document.getElementById("famoue")
let pamous = document.getElementById("famouse")

let as = document.getElementById("da")
let us = document.getElementById("po")
let usam = document.getElementById("re")
let usal = document.getElementById("mo")
let bet = document.getElementById("ne")

let sor = document.getElementById("firstm")
let hor = document.getElementById("secondm")
let nor = document.getElementById("threem")
let gor = document.getElementById("fourm")
let lor = document.getElementById("fivem")
if (localStorage.getItem("job")==="teacher") {
  var elements = document.getElementsByClassName("star");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.cursor="pointer";
    }




   




let sum = document.getElementsByClassName("star")
function first() {
  
  if (fir.getAttribute("src")=="star.png") {
  fir.setAttribute("src","star yeellow.png")
  localStorage.setItem("star","one")
  }

 
  else{
      fir.setAttribute("src","star.png")
      localStorage.setItem("star","notone")
  }
  
}
function two() {
  
  if  (tw.getAttribute("src")==="star.png") {
      localStorage.setItem("stare","two")
  tw.setAttribute("src","star yeellow.png")
  
  }
 
 
  else{
      localStorage.setItem("stare","nottwo")
      tw.setAttribute("src","star.png")
     
  }
}
function three() {
  if (thre.getAttribute("src")=="star.png") {

      localStorage.setItem("staree","three")
  
 
  thre.setAttribute("src","star yeellow.png")
 
}

else{
  localStorage.setItem("staree","notthree")
thre.setAttribute("src","star.png")

}
}
function four() {
  if (fou.getAttribute("src")=="star.png") {
      localStorage.setItem("staro","four")
  fou.setAttribute("src","star yeellow.png")
 
  }
  
  else{
      localStorage.setItem("staro","notfour")
  fou.setAttribute("src","star.png")
  
  }
}
function five() {
  if (fiv.getAttribute("src")=="star.png") {
      
      localStorage.setItem("staroo","five")
  fiv.setAttribute("src","star yeellow.png")
}
else{
  localStorage.setItem("staroo","notfive")
fiv.setAttribute("src","star.png")  
}
}


function six(params) {
  if (si.getAttribute("src")=="star.png") {
      si.setAttribute("src","star yeellow.png")
      localStorage.setItem("s","six")
      }
      
      else{
          si.setAttribute("src","star.png")
          localStorage.setItem("s","notsix")
      }
      
}
function seven(params) {
  if  (seve.getAttribute("src")=="star.png") {
      localStorage.setItem("st","seven")
      seve.setAttribute("src","star yeellow.png")
      
      }
      
      else{
          localStorage.setItem("st","notseven")
          seve.setAttribute("src","star.png")
       
      }
}
function eight(params) {
  if (eigh.getAttribute("src")=="star.png") {
      
      localStorage.setItem("ste","eight")
      
      eigh.setAttribute("src","star yeellow.png")
      
  }
 
  else{
      localStorage.setItem("ste","noteight")
      eigh.setAttribute("src","star.png")
     
  }
}
function nine(params) {
  if (nin.getAttribute("src")=="star.png") {
      localStorage.setItem("stee","nine")
  nin.setAttribute("src","star yeellow.png")
  
  }
 
  else{
      localStorage.setItem("stee","notnine")
  nin.setAttribute("src","star.png")

  }
}
function ten(params) {
  if (te.getAttribute("src")=="star.png") {
      localStorage.setItem("steep","ten")
  
    
      te.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("steep","notten")
  te.setAttribute("src","star.png")  
  }
}

}


function s(params) {
  if (h.getAttribute("src")=="star.png") {
      h.setAttribute("src","star yeellow.png")
      localStorage.setItem("m","one")
      }




      else{
          h.setAttribute("src","star.png")
          localStorage.setItem("m","notone")
      }
      
}
function se(params) {
  if  (na.getAttribute("src")=="star.png") {
      localStorage.setItem("ma","two")
      na.setAttribute("src","star yeellow.png")
     
      }
      
     
      else{
          localStorage.setItem("ma","nottwo")
          na.setAttribute("src","star.png")
    
      }
}
function e(params) {
  if (m.getAttribute("src")=="star.png") {
      localStorage.setItem("mal","three")
  
      
      m.setAttribute("src","star yeellow.png")

  }
  
  
  else{
      localStorage.setItem("mal","notthree")
      m.setAttribute("src","star.png")
    
  }
}
function n(params) {
  if (a.getAttribute("src")=="star.png") {
      localStorage.setItem("mala","four")
  a.setAttribute("src","star yeellow.png")
  
  }
  
  else{
      localStorage.setItem("mala","notfour")
  a.setAttribute("src","star.png")
 
  }
}
function t(params) {
  if (y.getAttribute("src")=="star.png") {
      localStorage.setItem("malak","five")
  
      y.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("malak","notfive")
  y.setAttribute("src","star.png")  
  }
}



function fone() {
  
  if (mo.getAttribute("src")=="star.png") {
  mo.setAttribute("src","star yeellow.png")
  localStorage.setItem("w","six")
  }
  else{
      mo.setAttribute("src","star.png")
      localStorage.setItem("w","notsix")
  }
  
}
function twon() {
  
  if  (ha.getAttribute("src")=="star.png") {
      localStorage.setItem("wa","seven")
  ha.setAttribute("src","star yeellow.png")
 
  }
 
  else{
      localStorage.setItem("wa","notseven")
      ha.setAttribute("src","star.png")
      
  }
}
function thren() {
  if (ma.getAttribute("src")=="star.png") {
      localStorage.setItem("wah","eight")
  

  ma.setAttribute("src","star yeellow.png")
  }
else{
  localStorage.setItem("wah","noteight")
ma.setAttribute("src","star.png")

}
}
function fourn() {
  if (da.getAttribute("src")=="star.png") {
      localStorage.setItem("wahd","nine")
  da.setAttribute("src","star yeellow.png")
 
  }
  
  else{
      localStorage.setItem("wahd","notnine")
  da.setAttribute("src","star.png")
  
  }
}
function fiven() {
  if (fi.getAttribute("src")=="star.png") {
      localStorage.setItem("wahda","ten")
 
  fi.setAttribute("src","star yeellow.png")
}
else{
  localStorage.setItem("wahda","notten")
fi.setAttribute("src","star.png")  
}
}


function ba(params) {
  if (yo.getAttribute("src")=="star.png") {
      yo.setAttribute("src","star yeellow.png")
      localStorage.setItem("so","one")
      }
      
      else{
          yo.setAttribute("src","star.png")
          localStorage.setItem("so","notone")
      }
      
}
function lg(params) {
  if  (sen.getAttribute("src")=="star.png") {
      localStorage.setItem("sor","two")
      sen.setAttribute("src","star yeellow.png")
     
      }
      
      else{
          localStorage.setItem("sor","nottwo")
          sen.setAttribute("src","star.png")
         
      }
}
function ay(params) {
  if (fe.getAttribute("src")=="star.png") {
      
      localStorage.setItem("sorr","three")
      
      fe.setAttribute("src","star yeellow.png")
    
  }
 
  else{
      localStorage.setItem("sorr","notthree")
      fe.setAttribute("src","star.png")
      
  }
}
function mag(params) {
  if (he.getAttribute("src")=="star.png") {
      localStorage.setItem("sorri","four")
  he.setAttribute("src","star yeellow.png")
  
  }
  
  else{
      localStorage.setItem("sorri","notfour")
  he.setAttribute("src","star.png")
  
  }
}
function hol(params) {
  if (sin.getAttribute("src")=="star.png") {
      
      localStorage.setItem("sorrie","five")
      
      sin.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("sorrie","notfive")
  sin.setAttribute("src","star.png")  
  }
}



function po(params) {
  if (sim.getAttribute("src")=="star.png") {
      sim.setAttribute("src","star yeellow.png")
      localStorage.setItem("c","six")
      }
      else{
          sim.setAttribute("src","star.png")
          localStorage.setItem("c","notsix")
      }
      
}
function ta(params) {
  if  (sevem.getAttribute("src")=="star.png") {
      localStorage.setItem("co","seven")
      sevem.setAttribute("src","star yeellow.png")
      }
  
     
      else{
          localStorage.setItem("co","notseven")
          sevem.setAttribute("src","star.png")
         
      }
}
function ym(params) {
  if (eighm.getAttribute("src")=="star.png") {
      
  
      localStorage.setItem("con","eight")
      eighm.setAttribute("src","star yeellow.png")
 }
  else{
      localStorage.setItem("con","noteight")
      eighm.setAttribute("src","star.png")
      
  }
}
function ne(params) {
  if (ninm.getAttribute("src")=="star.png") {
      localStorage.setItem("cong","nine")
  ninm.setAttribute("src","star yeellow.png")
  
  }
  
  else{
      localStorage.setItem("cong","notnine")
  ninm.setAttribute("src","star.png")
  
  }
}
function tow(params) {
  if (teb.getAttribute("src")=="star.png") {
      
      localStorage.setItem("conge","ten")
     
      teb.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("conge","notten")
  teb.setAttribute("src","star.png")  
  }
}


function fag(params) {
  if (fa.getAttribute("src")=="star.png") {
      fa.setAttribute("src","star yeellow.png")
      localStorage.setItem("conger","one")
      }
      else{
          fa.setAttribute("src","star.png")
          localStorage.setItem("conger","notone")
      }
      
}
function fama(params) {
  if  (fam.getAttribute("src")=="star.png") {
      localStorage.setItem("congera","two")
      fam.setAttribute("src","star yeellow.png")
     
      }
     
      else{
          localStorage.setItem("congera","nottwo")
          fam.setAttribute("src","star.png")
         
      }
}
function famor(params) {
  if (famo.getAttribute("src")=="star.png") {
      
      localStorage.setItem("congerat","three")
     
      famo.setAttribute("src","star yeellow.png")
     }
  else{
      localStorage.setItem("congerat","notthree")
      famo.setAttribute("src","star.png")

  }
}
function famour(params) {
  if (famou.getAttribute("src")=="star.png") {
      localStorage.setItem("congeratu","four")
  famou.setAttribute("src","star yeellow.png")

  }

  else{
      localStorage.setItem("congeratu","notfour")
  famou.setAttribute("src","star.png")

  }
}
function famousr(params) {
  if (famous.getAttribute("src")=="star.png") {
      localStorage.setItem("congeratul","five")
  
     
      famous.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("congeratul","notfive")
  famous.setAttribute("src","star.png")  
  }
}


function so(params) {
  if (pae.getAttribute("src")=="star.png") {
      pae.setAttribute("src","star yeellow.png")
      localStorage.setItem("congeratula","six")
      }
    
      else{
          pae.setAttribute("src","star.png")
          localStorage.setItem("congeratula","notsix")
      }
      
}
function ho(params) {
  if  (pam.getAttribute("src")=="star.png") {
      localStorage.setItem("congeratulat","seven")
      pam.setAttribute("src","star yeellow.png")
     
      }

     
      else{
          localStorage.setItem("congeratulat","notseven")
          pam.setAttribute("src","star.png")
          
      }
}
function no(params) {
  if (pamo.getAttribute("src")=="star.png") {
      localStorage.setItem("congeratulati","eight")
  
    
      pamo.setAttribute("src","star yeellow.png")
     }
  else{
     
      pamo.setAttribute("src","star.png")
      localStorage.setItem("congeratulati","noteight")
  }
  }

function go(params) {
  if (pamou.getAttribute("src")=="star.png") {
      localStorage.setItem("congeratulatio","nine")
  pamou.setAttribute("src","star yeellow.png")

  }
  
  else{
      localStorage.setItem("congeratulatio","notnine")
  pamou.setAttribute("src","star.png")

  }
}
function lo(params) {
  if (pamous.getAttribute("src")=="star.png") {
      localStorage.setItem("congeratulation","ten")
  
     
      pamous.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("congeratulation","notten")
  pamous.setAttribute("src","star.png")  
  }
}



function som(params) {
  if (as.getAttribute("src")=="star.png") {
      as.setAttribute("src","star yeellow.png")
      localStorage.setItem("hu","five")
      }
      

      else{
          as.setAttribute("src","star.png")
          localStorage.setItem("hu","notfive")
      }
      
}
function hom(params) {
  if  (us.getAttribute("src")=="star.png") {
      localStorage.setItem("hus","six")
      us.setAttribute("src","star yeellow.png")
     
      }
     
     
      else{
          localStorage.setItem("hus","notsix")
          us.setAttribute("src","star.png")
         
      }
}
function nom(params) {
  if (usam.getAttribute("src")=="star.png") {
      localStorage.setItem("huss","seven")
  
    
      usam.setAttribute("src","star yeellow.png")
  
  }
  
  else{
      localStorage.setItem("huss","notseven")
      usam.setAttribute("src","star.png")
     
  }
  }

function gom(params) {
  if (usal.getAttribute("src")=="star.png") {
      localStorage.setItem("hussi","eight")
  usal.setAttribute("src","star yeellow.png")
 
  }
  
  else{
      localStorage.setItem("hussi","noteight")
  usal.setAttribute("src","star.png")
 
  }
}
function lom(params) {
  if (bet.getAttribute("src")=="star.png") {
      localStorage.setItem("hussie","nine")
  
   
      bet.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("hussie","notnine")
  bet.setAttribute("src","star.png")  
  }
}

function soman(params) {
  if (sor.getAttribute("src")=="star.png") {
      sor.setAttribute("src","star yeellow.png")
      localStorage.setItem("z","five")
      }
      

      else{
          sor.setAttribute("src","star.png")
          localStorage.setItem("z","notfive")
      }
      
}
function homan(params) {
  if  (hor.getAttribute("src")=="star.png") {
      localStorage.setItem("ze","six")
      hor.setAttribute("src","star yeellow.png")
     
      }
      
     
      else{
          localStorage.setItem("ze","notsix")
          hor.setAttribute("src","star.png")
      
      }
}
function noman(params) {
  if (nor.getAttribute("src")=="star.png") {
      localStorage.setItem("zez","seven")
  
     
      nor.setAttribute("src","star yeellow.png")
      
  }

  else{
      localStorage.setItem("zez","notseven")
      nor.setAttribute("src","star.png")
    
  }
  }

function goman(params) {
  if (gor.getAttribute("src")=="star.png") {
      localStorage.setItem("zezo","eight")
  gor.setAttribute("src","star yeellow.png")
  
  }
  
  else{
      localStorage.setItem("zezo","noteight")
  gor.setAttribute("src","star.png")

  }
}
function loman(params) {
  if (lor.getAttribute("src")=="star.png") {
      localStorage.setItem("zezoe","nine")
  
     
      lor.setAttribute("src","star yeellow.png")
  }
  else{
      localStorage.setItem("zezoe","notnine")
  lor.setAttribute("src","star.png")  
  }
}
if (localStorage.getItem("stare")==="two") {
  tw.setAttribute("src","star yeellow.png")
}
if(localStorage.getItem("stare")==="nottwo"){
  tw.setAttribute("src","star.png")
}
if(localStorage.getItem("star")==="one"){
  fir.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("star")==="notone"){
  fir.setAttribute("src","star.png")
} 
if(localStorage.getItem("staree")==="three"){
  thre.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("staree")==="nothree"){
  thre.setAttribute("src","star.png")
} 
if(localStorage.getItem("staro")==="four"){
  fou.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("staro")==="notfour"){
  fou.setAttribute("src","star.png")
} 
if(localStorage.getItem("staroo")==="five"){
  fiv.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("staroo")==="notfive"){
  fiv.setAttribute("src","star.png")
} 
if(localStorage.getItem("s")==="six"){
  si.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("s")==="notsix"){
  si.setAttribute("src","star.png")
} if(localStorage.getItem("st")==="seven"){
  seve.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("st")==="notseven"){
  seve.setAttribute("src","star.png")
} if(localStorage.getItem("ste")==="eight"){
  eigh.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("ste")==="noteight"){
  eigh.setAttribute("src","star.png")
} if(localStorage.getItem("stee")==="nine"){
  nin.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("stee")==="notnine"){
  nin.setAttribute("src","star.png")
} if(localStorage.getItem("steep")==="ten"){
  te.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("steep")==="notten"){
  te.setAttribute("src","star.png")
} 
if(localStorage.getItem("w")==="six"){
  mo.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("w")==="notsix"){
  mo.setAttribute("src","star.png")
} if(localStorage.getItem("wa")==="seven"){
  ha.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("wa")==="notseven"){
  ha.setAttribute("src","star.png")
} if(localStorage.getItem("wah")==="eight"){
  ma.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("wah")==="noteight"){
  ma.setAttribute("src","star.png")
} if(localStorage.getItem("wahd")==="nine"){
  da.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("wahd")==="notnine"){
  da.setAttribute("src","star.png")
} if(localStorage.getItem("wahda")==="ten"){
  fi.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("wahda")==="notten"){
  fi.setAttribute("src","star.png")
} 
if(localStorage.getItem("m")==="one"){
  h.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("m")==="notone"){
  h.setAttribute("src","star.png")
} if(localStorage.getItem("ma")==="two"){
  na.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("ma")==="nottwo"){
  na.setAttribute("src","star.png")
} if(localStorage.getItem("mal")==="three"){
  m.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("mal")==="notthree"){
  m.setAttribute("src","star.png")
} if(localStorage.getItem("mala")==="four"){
  a.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("mala")==="notfour"){
  a.setAttribute("src","star.png")
} if(localStorage.getItem("malak")==="five"){
  y.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("malak")==="notfive"){
  y.setAttribute("src","star.png")
} 
if(localStorage.getItem("so")==="one"){
  yo.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("so")==="notone"){
  yo.setAttribute("src","star.png")
} if(localStorage.getItem("sor")==="two"){
  sen.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("sor")==="nottwo"){
  sen.setAttribute("src","star.png")
} if(localStorage.getItem("sorr")==="three"){
  fe.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("sorr")==="notthree"){
  fe.setAttribute("src","star.png")
} if(localStorage.getItem("sorri")==="four"){
  he.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("sorri")==="notfour"){
  he.setAttribute("src","star.png")
} if(localStorage.getItem("sorrie")==="five"){
  sin.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("sorrie")==="notfive"){
  sin.setAttribute("src","star.png")
} 
//new
if(localStorage.getItem("c")==="six"){
  sim.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("c")==="notsix"){
  sim.setAttribute("src","star.png")
}
if(localStorage.getItem("co")==="seven"){
  sevem.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("co")==="notseven")
{ sevem.setAttribute("src","star.png")}
if(localStorage.getItem("con")==="eight"){
  eighm.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("con")==="noteight"){
  eighm.setAttribute("src","star.png")
} if(localStorage.getItem("cong")==="nine"){
  ninm.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("cong")==="notnine"){
  ninm.setAttribute("src","star.png")
} if(localStorage.getItem("conge")==="ten"){
  teb.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("conge")==="notten"){
  teb.setAttribute("src","star.png")
} if(localStorage.getItem("conger")==="one"){
  fa.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("conger")==="notone"){
  fa.setAttribute("src","star.png")
} 
if(localStorage.getItem("congera")==="two"){
  fam.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congera")==="nottwo"){
  fam.setAttribute("src","star.png")
} if(localStorage.getItem("congerat")==="three"){
  famo.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congerat")==="notthree"){
  famo.setAttribute("src","star.png")
} if(localStorage.getItem("congeratu")==="four"){
  famou.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratu")==="notfour"){
  famou.setAttribute("src","star.png")
} if(localStorage.getItem("congeratul")==="five"){
  famous.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratul")==="notfive"){
  famous.setAttribute("src","star.png")
} if(localStorage.getItem("congeratula")==="six"){
  pae.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratula")==="notsix"){
  pae.setAttribute("src","star.png")
} 
if(localStorage.getItem("congeratulat")==="seven"){
  pam.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratulat")==="notseven"){
  pam.setAttribute("src","star.png")
} 
if(localStorage.getItem("congeratulati")==="eight"){
  pamo.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratulati")==="noteight"){
  pamo.setAttribute("src","star.png")
} if(localStorage.getItem("congeratulatio")==="nine"){
  pamou.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratulatio")==="notnine"){
  pamou.setAttribute("src","star.png")
} if(localStorage.getItem("congeratulation")==="ten"){
  pamous.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("congeratulation")==="notten"){
  pamous.setAttribute("src","star.png")
}
if(localStorage.getItem("hu")==="five"){
  as.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("hu")==="notfive"){
  as.setAttribute("src","star.png")
} 
if(localStorage.getItem("hus")==="six"){
  us.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("hus")==="notsix"){
  us.setAttribute("src","star.png")
} if(localStorage.getItem("huss")==="seven"){
  usam.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("huss")==="notseven"){
  usam.setAttribute("src","star.png")
} if(localStorage.getItem("hussi")==="eight"){
  usal.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("hussi")==="noteight"){
  usal.setAttribute("src","star.png")
} if(localStorage.getItem("hussie")==="nine"){
  bet.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("hussie")==="notnine"){
  bet.setAttribute("src","star.png")
} if(localStorage.getItem("z")==="five"){
  sor.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("z")==="notfive"){
  sor.setAttribute("src","star.png")
} 
if(localStorage.getItem("ze")==="six"){
  hor.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("ze")==="notsix"){
  hor.setAttribute("src","star.png")
} if(localStorage.getItem("zez")==="seven"){
  nor.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("zez")==="notseven"){
  nor.setAttribute("src","star.png")
} if(localStorage.getItem("zezo")==="eight"){
  gor.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("zezo")==="noteight"){
  gor.setAttribute("src","star.png")
} if(localStorage.getItem("zezoe")==="nine"){
  lor.setAttribute("src","star yeellow.png")
} 
if(localStorage.getItem("zezoe")==="notnine"){
  lor.setAttribute("src","star.png")
} 
