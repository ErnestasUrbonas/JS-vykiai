let body = document.querySelector("body");

var x = 0;
var y = 0;

function getRgb() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + a + "," + b + "," + c + ")";
    return bgColor
}

document
    .querySelector(".btn")
    .addEventListener("mouseover", () => (body.style.backgroundColor = getRgb()));


document
    .getElementById("fname")
    .addEventListener("keypress", () => (body.style.backgroundColor = getRgb()));




//                  mousemove ant viso puslapio
// body.addEventListener("mousemove", function (event) {
//     x = event.clientX;
//     y = event.clientY;

//     body.style.backgroundColor = "rgb(" + x + ", " + y + ", 100)";
//     body.textContent = x + ", " + y;
// })









