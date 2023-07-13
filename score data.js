function jo(params) {
    let back = document.getElementById("g")
    back.style.backgroundColor="rgb(59, 59, 59)"
}
function njo(params) {
    let back = document.getElementById("g")
    back.style.backgroundColor="rgb(24, 23, 23)"
}
function j(params) {
    let back = document.getElementById("ga")
    back.style.backgroundColor="rgb(59, 59, 59)"
}
function nj(params) {
    let back = document.getElementById("ga")
    back.style.backgroundColor="rgb(24, 23, 23)"
}
function joc(params) {
    let back = document.getElementById("gam")
    back.style.backgroundColor="rgb(59, 59, 59)"
}
function njoc(params) {
    let back = document.getElementById("gam")
    back.style.backgroundColor="rgb(24, 23, 23)"
}
function jock(params) {
    let back = document.getElementById("gamd")
    back.style.backgroundColor="rgb(59, 59, 59)"
}
function njock(params) {
    let back = document.getElementById("gamd")
    back.style.backgroundColor="rgb(24, 23, 23)"
}
function jocf(params) {
    let back = document.getElementById("gamde")
    back.style.backgroundColor="rgb(59, 59, 59)"
}
function njocf(params) {
    let back = document.getElementById("gamde")
    back.style.backgroundColor="rgb(24, 23, 23)"
}

if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
   
function jo(params) {
    let back = document.getElementById("g")
    back.style.backgroundColor="rgb(230, 225, 225)"
}
function njo(params) {
    let back = document.getElementById("g")
    back.style.backgroundColor="rgb(206, 211, 211)"
}
function j(params) {
    let back = document.getElementById("ga")
    back.style.backgroundColor="rgb(230, 225, 225)"
}
function nj(params) {
    let back = document.getElementById("ga")
    back.style.backgroundColor="rgb(206, 211, 211)"
}
function joc(params) {
    let back = document.getElementById("gam")
    back.style.backgroundColor="rgb(230, 225, 225)"
}
function njoc(params) {
    let back = document.getElementById("gam")
    back.style.backgroundColor="rgb(206, 211, 211)"
}
function jock(params) {
    let back = document.getElementById("gamd")
    back.style.backgroundColor="rgb(230, 225, 225)"
}
function njock(params) {
    let back = document.getElementById("gamd")
    back.style.backgroundColor="rgb(206, 211, 211)"
}
function jocf(params) {
    let back = document.getElementById("gamde")
    back.style.backgroundColor="rgb(230, 225, 225)"
}
function njocf(params) {
    let back = document.getElementById("gamde")
    back.style.backgroundColor="rgb(206, 211, 211)"
}

}
else{
    document.body.style.backgroundColor="rgb(24, 23, 23)"
    function jo(params) {
        let back = document.getElementById("g")
        back.style.backgroundColor="rgb(59, 59, 59)"
    }
    function njo(params) {
        let back = document.getElementById("g")
        back.style.backgroundColor="rgb(24, 23, 23)"
    }
    function j(params) {
        let back = document.getElementById("ga")
        back.style.backgroundColor="rgb(59, 59, 59)"
    }
    function nj(params) {
        let back = document.getElementById("ga")
        back.style.backgroundColor="rgb(24, 23, 23)"
    }
    function joc(params) {
        let back = document.getElementById("gam")
        back.style.backgroundColor="rgb(59, 59, 59)"
    }
    function njoc(params) {
        let back = document.getElementById("gam")
        back.style.backgroundColor="rgb(24, 23, 23)"
    }
    function jock(params) {
        let back = document.getElementById("gamd")
        back.style.backgroundColor="rgb(59, 59, 59)"
    }
    function njock(params) {
        let back = document.getElementById("gamd")
        back.style.backgroundColor="rgb(24, 23, 23)"
    }
    function jocf(params) {
        let back = document.getElementById("gamde")
        back.style.backgroundColor="rgb(59, 59, 59)"
    }
    function njocf(params) {
        let back = document.getElementById("gamde")
        back.style.backgroundColor="rgb(24, 23, 23)"
    }
    var elem = document.getElementsByTagName("h3");
    for (var i = 0; i < elem.length; i++) {
      elem[i].style.color = "white";
      
    }
    let rom = document.getElementById("rom")
    rom.style.color="white"
}



let rom = document.getElementById("rom")
if (localStorage.getItem("language")==="arabic") {
    rom.innerHTML="الصف الاول الثانوي"
    var elem = document.getElementsByClassName("st");
    for (var i = 0; i < elem.length; i++) {
      elem[i].innerHTML=" طالب" 
      
    }
    var elem = document.getElementsByClassName("num");
    for (var i = 0; i < elem.length; i++) {
      elem[i].innerHTML=" 30 "
      
    }
    var elem = document.getElementsByTagName("h3");
    for (var i = 0; i < elem.length; i++) {
      elem[i].style.marginLeft="3px"
      
    }
}