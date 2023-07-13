let nam = document.getElementById("ed")
let pass = document.getElementById("id")
let a = document.getElementById("a")
let v = nam.value
function signin(params) {
    // name
    if (nam.value!=localStorage.getItem("name")) {
       a.setAttribute("href","") 
      
       nam.value="error"
       
       localStorage.setItem("data","false")
       nam.style.color="red"
    }
  else{
    localStorage.setItem("data","true")
  }
 
  //password
  if (pass.value!=localStorage.getItem("password")) {
    a.setAttribute("href","") 
   
    pass.value="error"
    pass.value="red"
    localStorage.setItem("dat","false")
 }
else{
 localStorage.setItem("dat","true")
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
//password
if (localStorage.getItem("dat")==="false") {
   
    pass.style.color="red"
    pass.value="error"
    pass.onkeyup = function ang(params) {
        pass.style.color="black"
       }
   
}
//all
function re(params) {
    localStorage.setItem("data","true")
    localStorage.setItem("dat","true")
}
