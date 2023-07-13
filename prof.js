function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("em");
        preview.src = src;
        preview.style.display = "unset";
    }
}

if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
    }
    else{
    let em =  document.getElementById("em")
    em.style.filter="invert(1)"
    document.body.style.backgroundColor="rgb(24, 23, 23)"
var elements = document.getElementsByClassName("name");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "white";
}
var elements = document.getElementsByClassName("class");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "white";
}
var elements = document.getElementsByClassName("num");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "white";
}
var elements = document.getElementsByClassName("ber");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "white";
}
    }
    





    let al = document.getElementById("al")
    let er = document.getElementById("er")
    let e = document.getElementById("e")
    let t = document.getElementById("t")
    if (localStorage.getItem("language")==="arabic") {
     al.innerHTML=" 0 " 
     er.innerHTML=" التنبيهات"
     e.innerHTML="   0   " 
     t.innerHTML="  الامتحانات"

    } else {
      
    }
    
  //  let y = document.getElementById("em")
  //  y.setAttribute("src",localStorage.getItem("img"))