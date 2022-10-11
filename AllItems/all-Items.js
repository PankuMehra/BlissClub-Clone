import { slidebar, fetchData, displayData } from "./utils/functions.js";

document.getElementById("all-Items-slidebaarBox").innerHTML = slidebar();

let leggingsUrl = "http://localhost:3000/Leggings";
fetchData(leggingsUrl).then(function (data) {
  console.log(data);
  displayData(data);
});

// displayData();

let x = 0;

function clickLeftButton() {
  x++;
  if (x > 0) {
    x = -3;
  }
  document.getElementById("all-Items-slidebar-mover").style.transform = `translateX(${x * 13}%)`;
}

function clickRightButton() {
  x--;
  if (x < -3) {
    x = 0;
  }
  document.getElementById("all-Items-slidebar-mover").style.transform = `translateX(${x * 13}%)`;
}

document
  .getElementById("all-items-leftSlideButton")
  .addEventListener("click", clickLeftButton);
document
  .getElementById("all-items-rightSlideButton")
  .addEventListener("click", clickRightButton);
