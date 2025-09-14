"use strict";

let board = document.querySelector(".board");
let display = document.querySelector(".display");

let array = [
  "(",
  ")",
  "C",
  "<",
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
let previous = "";
let operator = "";
let current = "";
let result = 0;
let button = document.querySelectorAll(".number");

button.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (
      btn.textContent === "+" ||
      btn.textContent === "-" ||
      btn.textContent === "X" ||
      btn.textContent === "/" ||
      btn.textContent === "." ||
      btn.textContent === "(" ||
      btn.textContent === ")"
    ) {
      operator += btn.textContent;

      if (previous[previous.length - 1] !== operator[operator.length - 1]) {
        previous += btn.textContent;
        console.log("I am hee", previous);
      }
    } else {
      console.log("checking operator", operator);
      previous += btn.textContent;
      console.log(previous.length);
      console.log(
        "previous =",
        previous,
        "length=",
        previous.length,
        "operator=",
        operator,
        "length=",
        operator.length
      );
    }
  })
);
// was checking this logic
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
// button.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     switch (btn.innerText) {
//       case "+":
//         display.innerText += "+";
//         break;
//       case "/":
//         display.innerText += "/";

//         break;
//       case "-":
//         display.innerText += "-";

//         break;
//       case "X":
//         display.innerText += "x";

//         break;
//       case "1":
//         display.innerText += 1;

//         break;
//       case "2":
//         display.innerText += 2;

//         break;
//       case "3":
//         display.innerText += 3;
//         break;
//       case "4":
//         display.innerText += 4;

//         break;
//       case "5":
//         display.innerText += 5;

//         break;
//       case "6":
//         display.innerText += 6;

//         break;
//       case "7":
//         display.innerText += 7;

//         break;
//       case "8":
//         display.innerText += 8;

//         break;
//       case "9":
//         display.innerText += 9;

//         break;
//       case "0":
//         display.innerText += 0;

//         break;
//       case "(":
//         display.innerText += "(";
//         break;
//       case ")":
//         display.innerText += ")";
//         break;
//       case ".":
//         if (display.innerText.includes(".")) {
//           return; // Don't allow adding another decimal point
//         }
//         display.innerText += ".";
//         //I was here
//         break;
//         // console.log("hi", display.innerText[0]);
//         // if (display.innerText[display.innerText.length] === ".") {
//         //   return;
//         // } else {
//         //   display.innerText += ".";
//         // }
//         break;
//       case "C":
//         if (!display.innerText) {
//           return;
//         }
//         display.innerText = "";
//       case "=":
//         if (!display.innerText) {
//           return;
//         }
//         let o = display.innerText;
//         display.innerText = "";
//         display.innerText = eval(o);
//         console.log(o);
//         break;
//       case "<":
//         display.innerText = display.innerText.slice(
//           0,
//           display.innerText.length - 1
//         );
//         break;
//       default:
//         console.log("invalid");
//     }
//   });
// });

// document.addEventListener("keypress", () => {
//   if (display.value.length <= 7) {
//     display.focus();
//     button.forEach((btn) => {
//       btn.addEventListener("click", () => {
//         if (btn.innerText === "+") {
//           console.log("here");
//           display.innerText += "+";
//         }
//       });
//     });
//   } else {
//     display.blur();
//     let displayNumber = display.value;
//     console.log(displayNumber);
//   }
// });
