"use strict";

let board = document.querySelector(".board");
let display = document.querySelector(".display");
let button = document.querySelectorAll(".number");
let reset = document.getElementById("reset");
let remove = document.getElementById("delete");
let positive = document.getElementById("positive");
let negative = document.getElementById("substract");
let multiplication = document.getElementById("multiply");
let equal = document.getElementById("equal");
let division = document.getElementById("divide");

let previous = "";
let operator = "";
let current = "";

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    current = Number(btn.textContent);
    display.textContent = btn.textContent;
    console.log(previous, current);
  });
});
positive.addEventListener("click", () => {
  previous = Number(current);
  display.textContent = "";
  operator += "+";
});
negative.addEventListener("click", () => {
  previous = Number(current);
  display.textContent = "";
  operator += "-";
});
division.addEventListener("click", () => {
  previous = Number(current);
  display.textContent = "";
  operator += "/";
});
multiplication.addEventListener("click", () => {
  previous = Number(current);
  display.textContent = "";
  operator += "*";
});
equal.addEventListener("click", () => {
  switch (operator[operator.length - 1]) {
    case "+":
      display.textContent = add(Number(previous), Number(current));
      break;
    case "-":
      display.textContent = substract(Number(previous), Number(current));
      break;
    case "*":
      display.textContent = multiply(Number(previous), Number(current));
      break;
    case "/":
      display.textContent = divide(Number(previous), Number(current));
      break;
    default:
      console.log("Error");
  }
});
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
