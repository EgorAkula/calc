let button = document.getElementById("calc");
let input1 = document.getElementById("FirstNumber");
let input2 = document.getElementById("SecondNumber");
let output = document.getElementById("result");
let selector = document.getElementById("Selector");
let option1 = document.getElementById("Plus");
let option2 = document.getElementById("Minus");
let option3 = document.getElementById("Multiply");
let option4 = document.getElementById("Division");

function print() {
    let FirstNumber = Number(input1.value);
    let SecondNumber = Number(input2.value);
    if (selector == option1) {
        result = FirstNumber.value + SecondNumber.value;
    } if (selector == option2) {
        result = FirstNumber.value - SecondNumber.value;
    } if (selector == option3) {
        result = FirstNumber.value * SecondNumber.value;
    } if (selector == option4) {
        result = FirstNumber.value / SecondNumber.value
    }
    output.value = result;
}