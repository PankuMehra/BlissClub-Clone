import {
  slidebar,
  fetchData,
  displayData,
  sliderLeft,
  slideRight,
} from "../utils/functions.js";

document.getElementById("all-Items-slidebaarBox").innerHTML = slidebar();

let leggingsUrl = "https://blissclub.herokuapp.com/data?category=leggings";
fetchData(leggingsUrl).then(function (data) {
  // PriceFilter
  displayData(data);
  let filterData = () => {
    let arr = data;
    let priceInputMin = Number(document.querySelector(".input-min").value);
    let priceInputMax = Number(document.querySelector(".input-max").value);
    let newArr = arr.filter((elem) => {
      if (elem.price1 > priceInputMin && elem.price1 < priceInputMax) {
        return elem;
      }
    });
    console.log(newArr)
    displayData(newArr);
  };
  
  // low to High Sorting
  let filterDataL2H = () => {
    let arr = data;
    let L2H = arr.sort(function (a, b) {
      return Number(a.price1) - Number(b.price1);
    });
    console.log(L2H)
    displayData(L2H);
  };
  // High to Low Sorting
  let filterDataH2L = () => {
    let arr = data;
    console.log("dfbsdg");
    let H2L = arr.sort(function (a, b) {
      return Number(b.price1) - Number(a.price1);
    });
    console.log(H2L)
    displayData(H2L);
  };
  
  document.getElementById("input-min").addEventListener("input", filterData);
  document.getElementById("input-max").addEventListener("input", filterData);
  document.getElementById("range-min").addEventListener("change", filterData);
  document.getElementById("range-max").addEventListener("change", filterData);

  document.getElementById("priceL2H").addEventListener("click", filterDataL2H);
  document.getElementById("priceH2L").addEventListener("click", filterDataH2L);
});

document
.getElementById("all-items-leftSlideButton")
  .addEventListener("click", function () {
    sliderLeft("all-Items-slidebar-mover");
  });
  document
  .getElementById("all-items-rightSlideButton")
  .addEventListener("click", function () {
    slideRight("all-Items-slidebar-mover");
  });

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 50;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);
    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// document.getElementById("input-min").addEventListener("input", filterData);
// document.getElementById("input-max").addEventListener("input", filterData);
// document.getElementById("range-min").addEventListener("change", filterData);
// document.getElementById("range-max").addEventListener("change", filterData);

// document.getElementById("priceL2H").addEventListener("click", filterDataL2H);
// document.getElementById("priceH2L").addEventListener("change", filterDataH2L);
