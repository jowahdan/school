let h2 = document.getElementsByTagName("h2")
let optio = document.getElementsByTagName("select")
// if (Optio.) {
//     for (var i = 0; i < h2.length; i++) {
//         h2[i].style.color = "white";}
// }
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
    }



    if (localStorage.getItem("language")==="arabic") {
        let over = document.getElementById("over")
        let alli = document.getElementById("alli")
        let hf = document.getElementById("hf")
        hf.style.marginLeft="-500px"
        // hf.style.width="px"
        over.innerHTML="التقييم العام"
        over.style.marginLeft="100px"
        alli.style.width="280px"
        alli.style.marginLeft="120px"
        var elements = document.getElementsByClassName("staro");
   for (var i = 0; i < elements.length; i++) {
     elements[i].style.marginTop = "-2px";
     elements[i].style.marginRight = "5px";
}
    }