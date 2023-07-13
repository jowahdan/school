let nam = document.getElementById("ed")
let pass = document.getElementById("id")
let a = document.getElementById("a")
let v = nam.value
function signin(params) {
    // name
    if (nam.value!=localStorage.getItem("nam")) {
       a.setAttribute("href","") 
      
       nam.value="error"
       
       localStorage.setItem("sata","fals")
       nam.style.color="red"
    }
  else{
    localStorage.setItem("sata","tru")
  }
 
  //password
  if (pass.value!=localStorage.getItem("passwor")) {
    a.setAttribute("href","") 
   
    pass.value="error"
    pass.value="red"
    localStorage.setItem("sat","fals")
 }
else{
 localStorage.setItem("sat","tru")
}
}
//name
if (localStorage.getItem("sata")==="fals") {
   
    nam.style.color="red"
    nam.value="error"
   nam.onkeyup = function ang(params) {
    nam.style.color="black"
   }
}
//password
if (localStorage.getItem("sat")==="fals") {
   
    pass.style.color="red"
    pass.value="error"
    pass.onkeyup = function ang(params) {
        pass.style.color="black"
       }
   
}
//all
function re(params) {
    localStorage.setItem("sata","tru")
    localStorage.setItem("sat","tru")
}
