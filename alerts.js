if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
    }
    else{
    document.body.style.backgroundColor="rgb(24, 23, 23)"
    var elements = document.getElementsByTagName("h2");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color="whitesmoke";
    }
    var elements = document.getElementsByTagName("h1");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color="whitesmoke";
}
var elements = document.getElementsByTagName("h3");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color="whitesmoke";
}
var elements = document.getElementsByClassName("alert");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.backgroundColor="rgb(53, 49, 49)";
}
    }




let advice = document.getElementById("advice")
var aler = document.getElementsByClassName("h2");
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let thre = document.getElementById("thre")
let four = document.getElementById("four")
let fou = document.getElementById("fou")
let five = document.getElementById("five")
let fiv = document.getElementById("fiv")
    if (localStorage.getItem("language")==="arabic") {
      advice.innerHTML="حاول أن تحافظ على سلوكك وأخلاقك ، فنحن نرتقي بأخلاقنا"
      for (var i = 0; i < aler.length; i++) {
        aler[i].innerHTML="تنبيه";
      }
      one.innerHTML="3"
      two.innerHTML="التنبيهات"
      three.innerHTML="سلوك"
      thre.innerHTML="لقد قام بضرب زميله في الفصل"
      four.innerHTML="آخر فرصة"
      fou.innerHTML= "أنت على وشك تلقي استدعاء ولي امر"
      five.innerHTML="استدعاء ولي امر"
      fiv.innerHTML="يجب أن يأتي ولي الامر إلى المدرسة غدًا"
    }