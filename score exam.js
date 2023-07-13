if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
   



    }
    else{

    document.body.style.backgroundColor="rgb(24, 23, 23)"
    var elements = document.getElementsByTagName("h2");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "white";
    }
    var elements = document.getElementsByTagName("div");
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML.style.color = "white";
    }
   

 
    }