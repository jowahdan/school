if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(31, 30, 30)"
    }
    else{
    document.body.style.backgroundColor="rgb(31, 30, 30)"
    }
    


    if (localStorage.getItem("language")==="arabic") {
        let over = document.getElementById("over")
        let alli = document.getElementById("alli")
        let hf = document.getElementById("hf")
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
    }
      