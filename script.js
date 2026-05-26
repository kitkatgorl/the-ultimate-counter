let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

let numberDisplay = document.getElementById("number-display");

let plus = document.getElementById("increase-step-size");
let minus = document.getElementById("decrease-step-size");
let one = document.getElementById("reset-step-size");

let number = 0;
let x = 1;

reset.addEventListener("click", () => {
    number = 0;
    numberDisplay.innerText = number;
})

increase.addEventListener("click", () => {
    number += x;
    numberDisplay.innerText = number;
})

decrease.addEventListener("click", () => {
    if (number >= x){
    number -= x;
    numberDisplay.innerText = number;
    }
})


one.addEventListener("click", () => {
    x = 1;
    numberDisplay.innerText = number;
})

plus.addEventListener("click", () => {
    x += 1;
    numberDisplay.innerText = number;
})

minus.addEventListener("click", () => {
    if (x >= 2){
    x -= 1;
    numberDisplay.innerText = number;
    }
})