"use strict";

console.log("App starter...");

// // Find knappen
// const clickButton = document.querySelector("#click-button");

// // Lyt efter klik
// clickButton.addEventListener("click", function () {
//   console.log("Knappen blev klikket! ");
// });

const clickButton = document.querySelector("#click-button");
const heading = document.querySelector("h1");

clickButton.addEventListener("click", function () {
  console.log("Klik! ");
  //   heading.textContent = "Hej med Dig! ";
  clickButton.style.backgroundColor = "blue";
  clickButton.style.color = "white";
  //   heading.style.color = "yellow";
});

const resetbutton = document.querySelector("#reset-button");

resetbutton.addEventListener("click", function () {
  console.log("Reset knappen blev klikket! ");
  //   heading.textContent = "Movie App ";
  //   clickButton.style.backgroundColor = "none";
  //   clickButton.style.color = "white";
  //   heading.style.color = "white";
});

// Ændr count tallet
const countDisplay = document.querySelector("#counter");
let count = 0;

clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  if (count > 10) {
    countDisplay.style.color = "lightgreen";
  }
  if (count === 10) {
    alert("Tillykke! Du nåde 10 klik! ");
  }
});

resetbutton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;

  countDisplay.style.color = "#ffd700";
});

const minusButton = document.querySelector("#minus-btn");

minusButton.addEventListener("click", function () {
  count = count - 1;
  countDisplay.textContent = count;

  if (count < 10) {
    countDisplay.style.color = "#ffd700";
    } 

});

// const minusButton = document.querySelector("#minus-btn");

// function increaseCount() {
//   count = count + 1;
//   countDisplay.textContent = count;
// }

// function decreaseCount() {
//   count = count - 1;
//   countDisplay.textContent = count;
// }

// function resetCount() {
//   count = 0;
//   countDisplay.textContent = count;
// }

// clickButton.addEventListener("click", increaseCount);
// minusButton.addEventListener("click", decreaseCount);
// resetButton.addEventListener("click", resetCount);