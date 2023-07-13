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
    localStorage.setItem("name",nam.value) 
    localStorage.setItem("password",pass.value) 
    localStorage.setItem("phone",phon.value) 
    localStorage.setItem("anphone",anphon.value) 
    localStorage.setItem("adress",adress.value) 
    //name
    if (nam.value==="") {
        let a = document.getElementById("hom")
        a.setAttribute("href","")
        nam.value="error"
        localStorage.setItem("data","false")
        nam.style.color="red"
     }
   else{
     localStorage.setItem("data","true")
   }
   if (nam.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    nam.value="error"
    localStorage.setItem("data","false")
    nam.style.color="red"
 }
else{
 localStorage.setItem("data","true")
}
    //password
   if (pass.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    pass.value="error"
    localStorage.setItem("dat","false")
    pass.style.color="red"
 }
else{
 localStorage.setItem("dat","true")
}
if (pass.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    pass.value="error"
    localStorage.setItem("dat","false")
    pass.style.color="red"
 }
else{
 localStorage.setItem("dat","true")
}
    //phone
if (phon.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    phon.value="error"
    localStorage.setItem("da","false")
    phon.style.color="red"
 }
else{
 localStorage.setItem("da","true")
}
if (phon.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    phon.value="error"
    localStorage.setItem("da","false")
    phon.style.color="red"
 }
else{
 localStorage.setItem("da","true")
}
     //anphone
if (anphon.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    anphon.value="error"
    localStorage.setItem("d","false")
    anphon.style.color="red"
 }
else{
 localStorage.setItem("d","true")
}
if (anphon.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    anphon.value="error"
    localStorage.setItem("d","false")
    anphon.style.color="red"
 }
else{
 localStorage.setItem("d","true")
}
      //address
if (adress.value==="") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    adress.value="error"
    localStorage.setItem("dm","false")
    adress.style.color="red"
 }
else{
 localStorage.setItem("dm","true")
}
if (adress.value==="error") {
    let a = document.getElementById("hom")
    a.setAttribute("href","")
    adress.value="error"
    localStorage.setItem("dm","false")
    adress.style.color="red"
 }
else{
 localStorage.setItem("dm","true")
}
}


//name
if (localStorage.getItem("data")==="false") {
    nam.style.color="red"
    nam.value="error"
    nam.onkeyup = function ang(params) {
    nam.style.color="black"
   }
}
//pass
if (localStorage.getItem("dat")==="false") {
    pass.style.color="red"
    pass.value="error"
    pass.onkeyup = function ang(params) {
    pass.style.color="black"
   }
}
//phone
if (localStorage.getItem("da")==="false") {
    phon.style.color="red"
    phon.value="error"
    phon.onkeyup = function ang(params) {
    phon.style.color="black"
   }
}
//anphone
if (localStorage.getItem("d")==="false") {
    anphon.style.color="red"
    anphon.value="error"
    anphon.onkeyup = function ang(params) {
    anphon.style.color="black"
   }
}
//address
if (localStorage.getItem("dm")==="false") {
    adress.style.color="red"
    adress.value="error"
    adress.onkeyup = function ang(params) {
    adress.style.color="black"
   }
}


