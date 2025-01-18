let button = document.getElementById("calc");
let input1 = document.getElementById("FirstNumber");
let input2 = document.getElementById("SecondNumber");
let output = document.getElementById("result");
let btnGetResult = document.getElementById("calc")

let selector = document.getElementById("Selector");

let option1 = document.getElementById("Plus");
let option2 = document.getElementById("Minus");
let option3 = document.getElementById("Multiply");
let option4 = document.getElementById("Division");

function print() {
    let FirstNumber = Number(input1.value);
    let SecondNumber = Number(input2.value);
    if (selector.value == "Plus") {
        result = FirstNumber + SecondNumber;
    } if (selector.value == "Minus") {
        result = FirstNumber - SecondNumber;
    } if (selector.value == "Multiply") {
        result = FirstNumber * SecondNumber;
    } if (selector.value == "Division") {
        result = FirstNumber / SecondNumber;
    }
    output.value = result;
}

btnGetResult.addEventListener("click", print);