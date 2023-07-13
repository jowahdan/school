function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("em");
        preview.src = src;
        preview.style.display = "unset";
        localStorage.setItem("img",preview.src)
    }
}
  

let nam = document.getElementById("nam")
let pass = document.getElementById("pass")
let phon = document.getElementById("phon")
let anphon = document.getElementById("anphon")
let adress = document.getElementById("sh")
function data(params) {
    localStorage.setItem("nam",nam.value) 
    localStorage.setItem("passwor",pass.value) 
    localStorage.setItem("phon",phon.value) 
    localStorage.setItem("anphon",anphon.value) 
    localStorage.setItem("adres",adress.value) 
    //name
    if (nam.value==="") {
        let a = document.getElementById("hom")
        a.setAttribute("href","")
        nam.value="error"
        localStorage.setItem("sata","fals")
        nam.style.color="red"
     }
   else{
     localStorage.setItem("sata","tru")
   }
   if (nam.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    nam.value="error"
    localStorage.setItem("sata","fals")
    nam.style.color="red"
 }
else{
 localStorage.setItem("sata","tru")
}
    //password
   if (pass.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    pass.value="error"
    localStorage.setItem("sat","fals")
    pass.style.color="red"
 }
else{
 localStorage.setItem("sat","tru")
}
if (pass.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    pass.value="error"
    localStorage.setItem("sat","fals")
    pass.style.color="red"
 }
else{
 localStorage.setItem("sat","tru")
}
    //phone
if (phon.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    phon.value="error"
    localStorage.setItem("sa","fals")
    phon.style.color="red"
 }
else{
 localStorage.setItem("sa","tru")
}
if (phon.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    phon.value="error"
    localStorage.setItem("sa","fals")
    phon.style.color="red"
 }
else{
 localStorage.setItem("sa","tru")
}
     //anphone
if (anphon.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    anphon.value="error"
    localStorage.setItem("s","fals")
    anphon.style.color="red"
 }
else{
 localStorage.setItem("s","tru")
}
if (anphon.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    anphon.value="error"
    localStorage.setItem("s","fals")
    anphon.style.color="red"
 }
else{
 localStorage.setItem("s","tru")
}
      //address
if (adress.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    adress.value="error"
    localStorage.setItem("sm","fals")
    adress.style.color="red"
 }
else{
 localStorage.setItem("sm","tru")
}
if (adress.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    adress.value="error"
    localStorage.setItem("sm","fals")
    adress.style.color="red"
 }
else{
 localStorage.setItem("sm","tru")
}
}


//   name
if (localStorage.getItem("sata")==="fals") {
    nam.style.color="red"
    nam.value="error"
    nam.onkeyup = function ang(params) {
    nam.style.color="black"
   }
}
// pass
if (localStorage.getItem("sat")==="fals") {
    pass.style.color="red"
    pass.value="error"
    pass.onkeyup = function ang(params) {
    pass.style.color="black"
   }
}
// phone
if (localStorage.getItem("sa")==="fals") {
    phon.style.color="red"
    phon.value="error"
    phon.onkeyup = function ang(params) {
    phon.style.color="black"
   }
}
// anphone
if (localStorage.getItem("s")==="fals") {
    anphon.style.color="red"
    anphon.value="error"
    anphon.onkeyup = function ang(params) {
    anphon.style.color="black"
   }
}
// address
if (localStorage.getItem("sm")==="fals") {
    adress.style.color="red"
    adress.value="error"
    adress.onkeyup = function ang(params) {
    adress.style.color="black"
   }
}


