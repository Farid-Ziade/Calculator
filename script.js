"use strict";

let board = document.querySelector(".board");
let display = document.querySelector(".display");

document.addEventListener("keypress", (e) => {
  if (display.value.length <= 7) {
    display.focus();
  } else {
    display.blur();
  }
});

let array = [
  "(",
  ")",
  "C",
  "<-",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "X",
  1,
  2,
  3,
  "-",
  0,
  ".",
  "=",
  "+",
];
for (let i = 0; i < 20; i++) {
  let number = document.createElement("button");
  number.innerText = array[i];
  number.classList = "number";
  board.append(number);
}
let button = document.querySelectorAll(".number");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "+") {
      display.innerText += "+";
    }
  });
}); //to fix this function

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}
