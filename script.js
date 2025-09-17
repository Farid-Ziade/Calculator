"use strict";

let board = document.querySelector(".board");
let display = document.querySelector(".display");
let button = document.querySelectorAll(".number");
let reset = document.getElementById("reset");
let remove = document.getElementById("delete");
let previous = "";

let result = 0;

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    let val = btn.textContent;
    let operator = ["+", "-", "*", "/", "."];
    let last = display.textContent.slice(-1);
    if (operator.includes(val) && operator.includes(last)) {
      return;
    } else {
      if (display.textContent === "" && operator.includes(val) && val !== "-") {
        return;
      } else {
        display.textContent += btn.textContent;
      }
    }
  });
});

equal.addEventListener("click", () => {
  result = eval(display.textContent);
  display.textContent = "";
  display.textContent = result;
});

reset.addEventListener("click", () => {
  display.textContent = "";
});
remove.addEventListener("click", () => {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
});
