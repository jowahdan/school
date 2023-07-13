let one = document.getElementById("one")
let three = document.getElementById("three")
let numb = 300
let num = numb+1
let nu = num-1
let two = document.getElementById("two")
let four = document.getElementById("four")
let number = 500
let numbe = number+1
let n = numbe-1
let like = document.getElementById("blue")
let ang = document.getElementById("oran")
let lik = document.getElementById("blu")
let an = document.getElementById("ora")
let li = document.getElementById("bl")
let a = document.getElementById("or")
if (localStorage.getItem("like")==="blue") {
    like.setAttribute("src","like b.png")
    one.innerHTML= num;  
}
if (localStorage.getItem("like")==="white") {
    like.setAttribute("src","like w.png")
    one.innerHTML= nu;  
}
if (localStorage.getItem("angry")==="orange") {
    ang.setAttribute("src","angry o.png")
    two.innerHTML= numbe;  
}
if (localStorage.getItem("anagry")==="white") {
    ang.setAttribute("src","angry w.png")
    two.innerHTML= n;  
}
if (localStorage.getItem("lik")==="blue") {
    lik.setAttribute("src","like b.png")
    three.innerHTML= num;  
}
if (localStorage.getItem("lik")==="white") {
    lik.setAttribute("src","like w.png")
    three.innerHTML= nu;  
}
if (localStorage.getItem("angr")==="orange") {
    an.setAttribute("src","angry o.png")
    four.innerHTML= numbe;  
}
if (localStorage.getItem("angr")==="white") {
    an.setAttribute("src","angry w.png")
    four.innerHTML= n;  
}
if (localStorage.getItem("li")==="blue") {
    li.setAttribute("src","like b.png")
    five.innerHTML= num;  
}
if (localStorage.getItem("li")==="white") {
    li.setAttribute("src","like w.png")
    five.innerHTML= nu;  
}
if (localStorage.getItem("ang")==="orange") {
    a.setAttribute("src","angry o.png")
    six.innerHTML= numbe;  
}
if (localStorage.getItem("ang")==="white") {
    a.setAttribute("src","angry w.png")
    six.innerHTML= n;  
}
function blue(params) {
   
 if(ang.getAttribute("src")==="angry o.png"){
    like.setAttribute("src","like b.png")
    ang.setAttribute("src","angry w.png")
    one.innerHTML= num;  
two.innerHTML= n
localStorage.setItem("like","blue")
localStorage.setItem("angry","white")
   }
   else if (like.getAttribute("src")==="like w.png") {
    like.setAttribute("src","like b.png")
    ang.setAttribute("src","angry w.png")
    one.innerHTML= num;  
    localStorage.setItem("like","blue")
    localStorage.setItem("angry","white")
   } 
  
   else {
    like.setAttribute("src","like w.png")
    one.innerHTML= nu;
    localStorage.setItem("like","white")
   }
   
}
function oran(params) {
    let ang = document.getElementById("oran")
    let like = document.getElementById("blue")
    if(like.getAttribute("src")==="like b.png"){
        like.setAttribute("src","like w.png")
        ang.setAttribute("src","angry o.png")
        one.innerHTML= nu;  
    two.innerHTML= numbe;
    localStorage.setItem("angry","orange")
    localStorage.setItem("like","white")
       }
   else if (ang.getAttribute("src")==="angry w.png") {
        ang.setAttribute("src","angry o.png")
        like.setAttribute("src","like w.png")
        two.innerHTML= numbe;  
        localStorage.setItem("angry","orange")
        localStorage.setItem("like","white")
    } else {
        ang.setAttribute("src","angry w.png")
        two.innerHTML= n;  
        localStorage.setItem("angry","white")
    }
    
 }

 function blu(params) {
    
    if(an.getAttribute("src")==="angry o.png"){
        lik.setAttribute("src","like b.png")
        an.setAttribute("src","angry w.png")
        three.innerHTML= num;  
    four.innerHTML= n
    localStorage.setItem("lik","blue")
localStorage.setItem("angr","white")
       }
       else if (lik.getAttribute("src")==="like w.png") {
        lik.setAttribute("src","like b.png")
        an.setAttribute("src","angry w.png")
        three.innerHTML= num;  
        localStorage.setItem("lik","blue")
        localStorage.setItem("angr","white")
       } 
      
       else {
        lik.setAttribute("src","like w.png")
        three.innerHTML= nu;
        localStorage.setItem("lik","white")
       }
    
 }
 function ora(params) {
     let an = document.getElementById("ora")
     let lik = document.getElementById("blu")
     if(lik.getAttribute("src")==="like b.png"){
        lik.setAttribute("src","like w.png")
        an.setAttribute("src","angry o.png")
        three.innerHTML= nu;  
    four.innerHTML= numbe;
    localStorage.setItem("angr","orange")
    localStorage.setItem("lik","white")
       }
   else if (an.getAttribute("src")==="angry w.png") {
        an.setAttribute("src","angry o.png")
        lik.setAttribute("src","like w.png")
        four.innerHTML= numbe; 
        localStorage.setItem("angr","orange")
        localStorage.setItem("lik","white") 
    } else {
        an.setAttribute("src","angry w.png")
        four.innerHTML= n;  
        localStorage.setItem("angr","white")
    }
     
  }
  function bl(params) {
   
    if(a.getAttribute("src")==="angry o.png"){
        li.setAttribute("src","like b.png")
        a.setAttribute("src","angry w.png")
        five.innerHTML= num;  
    six.innerHTML= n
    localStorage.setItem("li","blue")
localStorage.setItem("ang","white")
       }
       else if (li.getAttribute("src")==="like w.png") {
        li.setAttribute("src","like b.png")
        a.setAttribute("src","angry w.png")
        five.innerHTML= num; 
        localStorage.setItem("li","blue")
        localStorage.setItem("ang","white") 
       } 
      
       else {
        li.setAttribute("src","like w.png")
        five.innerHTML= nu;
        localStorage.setItem("li","white")
       }
       
    
 }
 function or(params) {
     let a = document.getElementById("or")
     let li = document.getElementById("bl")
     if(li.getAttribute("src")==="like b.png"){
        li.setAttribute("src","like w.png")
        a.setAttribute("src","angry o.png")
        five.innerHTML= nu;  
    six.innerHTML= numbe;
    localStorage.setItem("ang","orange")
    localStorage.setItem("li","white")
       }
   else if (a.getAttribute("src")==="angry w.png") {
        a.setAttribute("src","angry o.png")
        li.setAttribute("src","like w.png")
        six.innerHTML= numbe;
        localStorage.setItem("ang","orange")
        localStorage.setItem("li","white")   
    } else {
        a.setAttribute("src","angry w.png")
        six.innerHTML= n;  
        localStorage.setItem("ang","white")
    }
     
  }

  if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
    }
    else{
    document.body.style.backgroundColor="rgb(24, 23, 23)"
    var elements = document.getElementsByClassName("post");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor="rgb(53, 49, 49)";
}
var elements = document.getElementsByTagName("h2");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color="whitesmoke";
}
    }



    var adv = document.getElementsByClassName("angry");
    var advert = document.getElementsByClassName("like");

    if (localStorage.getItem("language")==="arabic") {
        for (var i = 0; i < adv.length; i++) {
            adv[i].innerHTML="اغضبني";
          }
          for (var i = 0; i < advert.length; i++) {
            advert[i].innerHTML="اعجبني";
          }
    } else {
        
    }