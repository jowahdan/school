let s = 0

//  if (localStorage.getItem("language"=="arabic")) {
//   localStorage.setItem("")
//  }
// let divmain =  document.createElement("div")


function choise(params) {


  let by = document.createElement("button")
  by.innerHTML="close"
  by.style.marginRight="650px"
  by.onclick=function dis(params) {
    divmain.style.display="none"
    h1.remove()
    s--
    h1.innerHTML=s
  }

  let h1 =  document.createElement("h1")
  
  s++
  
  h1.innerHTML= s
  h1.style.textAlign="center"
  h1.style.marginBottom="-50px"
document.body.append(h1)
    let divmain =  document.createElement("div")
  divmain.style.backgroundColor="rgb(165, 172, 187)"
divmain.id="dim"

  divmain.style.height="auto"
  let div =  document.createElement("div")
//   div.style.backgroundColor="whitesmoke"
  document.body.append(div)
  div.style.height="150px"
  div.style.width="700px"
  div.style.display="flex"
  div.style.flexDirection="row"
  div.style.justifyContent="center"
  div.style.direction="ltr"
div.style.marginRight="-20px"

  divmain.style.marginTop="60px"
  divmain.style.direction="rtl"
  // divmain.style.display="flex"
//   divmain.style.flexDirection="row"
  let add =  document.createElement("h2")
  add.innerHTML="the question"
  add.style.marginRight="20px"
  add.style.marginTop="45px"
  add.style.textAlign="left"
  let quest =  document.createElement("textarea")
  quest.type="text"
  quest.style.width="400px"
  quest.style.height="50px"
  quest.style.margin="35px 36px"
quest.style.fontSize="20px"

let button =  document.createElement("button")
button.innerHTML="ok"
button.style.height="30px"
button.style.marginTop="45px"

  let di =  document.createElement("div")
//   div.style.backgroundColor="whitesmoke"
  document.body.append(di)
  di.style.height="150px"
  di.style.width="700px"
  di.style.display="flex"
  di.style.flexDirection="row"
  di.style.justifyContent="center"
  di.style.direction="ltr"
 di.style.marginRight="650px"
 di.style.marginTop="-150px"
  let ad =  document.createElement("h2")
  ad.innerHTML="number of choice"
  ad.style.marginLeft="-20px"
  ad.style.marginTop="45px"
  ad.style.textAlign="left"
  
  let ques =  document.createElement("input")

  ques.type="number"
  ques.style.width="400px"
  ques.style.height="50px"
  ques.style.margin="35px 30px"
  ques.style.fontSize="20px"

  let butto =  document.createElement("button")
butto.innerHTML="ok"
butto.style.height="30px"

butto.style.marginTop="45px"
butto.style.marginLeft="15px"

let tion = document.createElement("h2")
// tion.style.height="auto"
// tion.style.width="10px"
tion.style.marginTop="-20px"
// tion.style.marginLeft="1100px"
// tion.style.textAlign="center"

tion.fontSize="88px"
divmain.style.marginTop="67px"


button.onclick = function change(params) {
 tion.innerHTML= quest.value

 divmain.style.marginTop="67px"
 tion.style.direction="rtl"
//  tion.style.backgroundColor="black"
// document.body.appendChild(tion)

 }


 document.body.append(divmain)



 
  butto.onclick = function chang(params) {
 if (ques.value==2) {
  let jm = document.createElement("input")
 let jok = document.createElement("button")
 jok.innerHTML="ok"
 jok.style.height="30px"
 jok.style.width="70px"
 jok.style.marginTop="85px"
 let jom = document.createElement("input")
 let bothm = document.createElement("div")
//  jm.style.backgroundColor="red"
jm.style.fontSize="18px"
jm.placeholder="second choice"
 jm.style.width="200px"
 jm.style.height="50px"
 jm.style.borderRadius="10px"
 jm.style.direction="ltr"
//  jom.style.backgroundColor="red"
 jom.style.width="200px"
 jom.style.height="50px"
 jom.style.borderRadius="10px"
 jom.style.fontSize="18px"
jom.placeholder=" first choice"
jom.style.direction="ltr"
 bothm.append(jm,jok,jom)
 bothm.style.width="800px"

 bothm.style.display="flex"
 bothm.style.margin="1px auto"
 bothm.style.flexDirection="row"
 bothm.style.justifyContent="space-between"




 let j = document.createElement("button")
 
 let jo = document.createElement("button")
 let jokk = document.createElement("button")
 jokk.innerHTML="remove"
 jokk.style.height="30px"
 jokk.style.width="70px"
 jokk.style.marginTop="85px"
 let both = document.createElement("div")
 j.style.backgroundColor="red"
 j.style.width="200px"
 j.style.height="50px"
 j.style.borderRadius="10px"
 j.style.cursor="pointer"
 j.onclick=function col(params) {
  // switch (j.style.backgroundColor) {
  //   case red:
  //    green
  //     break;
  
  //   default:
  //     break;
  // }

 }
 jo.style.backgroundColor="red"
 jo.style.width="200px"
 jo.style.height="50px"
 jo.style.borderRadius="10px"
 jo.style.cursor="pointer"
  jo.onclick=function co(params) {
  if (jo.style.backgroundColor="red") {
    jo.style.backgroundColor="green"
  }
  else{
    jo.style.backgroundColor="red"
  }

 }
 both.append(j,jokk,jo)
 both.style.width="800px"

 both.style.display="flex"
 both.style.margin="1px auto"
 both.style.flexDirection="row"
 both.style.justifyContent="space-between"
    divmain.append(bothm)
    jok.onclick=function dif(params) {
      divmain.append(both)
      bothm.remove()
      jo.innerHTML=jom.value
      j.innerHTML=jm.value
    }
    jokk.onclick=function diff(params) {
      // divmain.append(both)
      both.remove()
      // jo.innerHTML=jom.value
      // j.innerHTML=jm.value
    }
    if (localStorage.getItem("language")==="arabic") {
      let adm = document.getElementById("adm")
      adm.innerHTML="اضف سؤالا"
      let one = document.getElementById("one")
      one.innerHTML="اختياري"
      let two = document.getElementById("two")
      two.innerHTML="مقالي"
      by.innerHTML="اغلاق"
      add.innerHTML="السؤال"
      ad.innerHTML="عدد الاختيارات"
      jom.placeholder="الاختيار الاول"
      jm.placeholder="الاختيار الثاني"
      jok.innerHTML="تم"
      jokk.innerHTML="ازالة"
    }
  
}
  
if (ques.value==3) {
  let jm = document.createElement("input")
  let jomm = document.createElement("input")
  let jom = document.createElement("input")
  let jok = document.createElement("button")
  jok.innerHTML="ok"
  jok.style.height="30px"
  jok.style.width="70px"
  jok.style.marginTop="85px"
  jok.style.marginLeft="-510px"
  let bothm = document.createElement("div")
 //  jm.style.backgroundColor="red"
 jm.style.fontSize="18px"
 jm.placeholder="third choise"
  jm.style.width="200px"
  jm.style.height="50px"
  jm.style.borderRadius="10px"
  jm.style.direction="ltr"
 //  jom.style.backgroundColor="red"
  jom.style.width="200px"
  jom.style.height="50px"
  jom.style.borderRadius="10px"
  jom.style.fontSize="18px"
 jom.placeholder="second choise"
 jom.style.direction="ltr"

 jomm.style.width="200px"
 jomm.style.height="50px"
 jomm.style.borderRadius="10px"
 jomm.style.fontSize="18px"
jomm.placeholder="first choise"
jomm.style.direction="ltr"
jom.style.marginLeft="-100px"
  bothm.append(jm,jok,jom,jomm)
  bothm.style.width="1200px"
 
  bothm.style.display="flex"
  bothm.style.margin="1px 80px"
  bothm.style.flexDirection="row"
  // bothm.style.backgroundColor="black"
  bothm.style.justifyContent="space-between"
 
 
 
 
  let j = document.createElement("button")
  let joo = document.createElement("button")
  let jo = document.createElement("button")
  let jokm = document.createElement("button")
 jokm.innerHTML="remove"
 jokm.style.height="30px"
 jokm.style.width="70px"
 jokm.style.marginTop="85px"
 jokm.style.marginLeft="-510px"
  let both = document.createElement("div")
  j.style.backgroundColor="red"
  j.style.width="200px"
  j.style.height="50px"
  j.style.borderRadius="10px"
  joo.style.backgroundColor="red"
  joo.style.width="200px"
  joo.style.height="50px"
  joo.style.borderRadius="10px"
  joo.style.marginLeft="-100px"
  jo.style.backgroundColor="red"
  jo.style.width="200px"
  jo.style.height="50px"
  jo.style.borderRadius="10px"
  both.append(j,jokm,jo,joo)
  both.style.width="1200px"
 
  both.style.display="flex"
  both.style.margin="1px 20px"
  both.style.flexDirection="row"
  both.style.justifyContent="space-between"
     divmain.append(bothm)
     jok.onclick=function dif(params) {
       divmain.append(both)
       bothm.remove()
       jo.innerHTML=jom.value
       j.innerHTML=jm.value
       jo.innerHTML=jom.value
       joo.innerHTML=jomm.value
     }
     jokm.onclick=function diff(params) {
      // divmain.append(both)
      both.remove()
      // jo.innerHTML=jom.value
      // j.innerHTML=jm.value
    }
    if (localStorage.getItem("language")==="arabic") {
      let adm = document.getElementById("adm")
      adm.innerHTML="اضف سؤالا"
      let one = document.getElementById("one")
      one.innerHTML="اختياري"
      let two = document.getElementById("two")
      two.innerHTML="مقالي"
      by.innerHTML="اغلاق"
      add.innerHTML="السؤال"
      ad.innerHTML="عدد الاختيارات"
      jom.placeholder="الاختيار الثاني"
      jomm.placeholder="الاختيار الاول"
      jm.placeholder="الاختيار الثالث"
      jok.innerHTML="تم"
      jokm.innerHTML="ازالة"
    }
  
}


  }
  if (localStorage.getItem("language")==="arabic") {
    let adm = document.getElementById("adm")
    adm.innerHTML="اضف سؤالا"
    let one = document.getElementById("one")
    one.innerHTML="اختياري"
    let two = document.getElementById("two")
    two.innerHTML="مقالي"
    by.innerHTML="اغلاق"
    add.innerHTML="السؤال"
    ad.innerHTML="عدد الاختيارات"
    button.innerHTML="تم"
    butto.innerHTML="تم"
    
  }
 
  if(localStorage.getItem("theme")==="light"){
    document.body.style.backgroundColor="rgb(206, 211, 211)"
    }
    else{
    document.body.style.backgroundColor="rgb(24, 23, 23)"
    let adm = document.getElementById("adm")
    adm.style.color="white"
    h1.style.color="white"
  
    }
     
divmain.append(by,div,di,tion)
div.append(button,quest,add)
di.append(butto,ques,ad)



}








function nochoise(params) {
  let by = document.createElement("button")
  by.innerHTML="close"
  by.style.marginRight="650px"
  by.onclick=function dis(params) {
    divmain.style.display="none"
    h1.remove()
    s--
    h1.innerHTML=s
  }

  let h1 =  document.createElement("h1")
  
  s++
  
  h1.innerHTML= s
  h1.style.textAlign="center"
  h1.style.marginBottom="-50px"
document.body.append(h1)
    let divmain =  document.createElement("div")
  divmain.style.backgroundColor="rgb(165, 172, 187)"

  divmain.style.height="auto"
  let div =  document.createElement("div")
//   div.style.backgroundColor="whitesmoke"
  document.body.append(div)
  div.style.height="150px"
  div.style.width="700px"
  div.style.display="flex"
  div.style.flexDirection="row"
  div.style.justifyContent="center"
  div.style.direction="ltr"
div.style.marginRight="-20px"

  divmain.style.marginTop="60px"
  divmain.style.direction="rtl"
  // divmain.style.display="flex"
//   divmain.style.flexDirection="row"
  let add =  document.createElement("h2")
  add.innerHTML="add a question"
  add.style.marginRight="20px"
  add.style.marginTop="45px"
  add.style.textAlign="left"
  let quest =  document.createElement("textarea")
  quest.type="text"
  quest.style.width="400px"
  quest.style.height="50px"
  quest.style.margin="35px 36px"
quest.style.fontSize="20px"

let button =  document.createElement("button")
button.innerHTML="ok"
button.style.height="30px"
button.style.marginTop="45px"

  let di =  document.createElement("div")
//   div.style.backgroundColor="whitesmoke"
  document.body.append(di)
  di.style.height="150px"
  di.style.width="700px"
  di.style.display="flex"
  di.style.flexDirection="row"
  di.style.justifyContent="center"
  di.style.direction="ltr"
 di.style.marginRight="650px"
 di.style.marginTop="-150px"
  let ad =  document.createElement("h2")
  ad.innerHTML="add an answer"
  ad.style.marginRight="20px"
  ad.style.marginTop="45px"
  ad.style.textAlign="left"
  
  let ques =  document.createElement("input")

  ques.type="text"
  ques.style.width="400px"
  ques.style.height="50px"
  ques.style.margin="35px 30px"
  ques.style.fontSize="20px"

  let butto =  document.createElement("button")
butto.innerHTML="ok"
butto.style.height="30px"

butto.style.marginTop="45px"
butto.style.marginLeft="15px"

let tion = document.createElement("h2")

tion.style.marginTop="-20px"


let tio = document.createElement("h3")

tio.style.marginTop="-20px"
divmain.style.marginTop="67px"


button.onclick = function change(params) {
 tion.innerHTML= quest.value

 divmain.style.marginTop="67px"
 tion.style.direction="rtl"


 }
 butto.onclick = function ch(params) {
  tio.innerHTML= ques.value
 
  divmain.style.marginTop="67px"
  tio.style.direction="rtl"
 
 
  }

 document.body.append(divmain)


 if (localStorage.getItem("language")==="arabic") {
  let adm = document.getElementById("adm")
  adm.innerHTML="اضف سؤالا"
  let one = document.getElementById("one")
  one.innerHTML="اختياري"
  let two = document.getElementById("two")
  two.innerHTML="مقالي"
  by.innerHTML="اغلاق"
  add.innerHTML="السؤال"
  ad.innerHTML="الاجابة"
}
 
 if(localStorage.getItem("theme")==="light"){
  document.body.style.backgroundColor="rgb(206, 211, 211)"
  }
  else{
  document.body.style.backgroundColor="rgb(24, 23, 23)"
  let adm = document.getElementById("adm")
  adm.style.color="white"
  h1.style.color="white"
  // divmain.style.backgroundColor="rgb(66, 64, 64)"
  
 
  }


     
divmain.append(by,div,di,tion,tio)
div.append(button,quest,add)
di.append(butto,ques,ad)
}






if (localStorage.getItem("language")==="arabic") {
  let adm = document.getElementById("adm")
  adm.innerHTML="اضف سؤالا"
  let one = document.getElementById("one")
  one.innerHTML="اختياري"
  let two = document.getElementById("two")
  two.innerHTML="مقالي"
}


if(localStorage.getItem("theme")==="light"){
  document.body.style.backgroundColor="rgb(206, 211, 211)"
  }
  else{
  document.body.style.backgroundColor="rgb(24, 23, 23)"
  let adm = document.getElementById("adm")
  adm.style.color="white"
  h1.style.color="white"
  
  }