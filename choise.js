

function move() {
 let div = document.getElementById("all") 
div.style.marginTop="-550px"
console.log("hiu");

}
// move()
setTimeout(move,400)



function teacher(params) {
    localStorage.setItem("job","teacher")
}
function student(params) {
    localStorage.setItem("job","student")
}