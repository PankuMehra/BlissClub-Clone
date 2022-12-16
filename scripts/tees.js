import {
  slidebar,
  fetchData,
  displayData,
  sliderLeft,
  slideRight,
  filtering,
  HeadingSort,
  filterData,
  filterDataL2H,
  filterDataH2L,
} from "../utils/functions.js";
import { chatbot } from "../chatbot/chatbotexp.js";
import { footer } from "../utils/footer-exp.js";
import { topNavBar, navBar } from "../utils/nav-bar-exp.js";
import URL from "../URL/URL.js";


document.getElementById("side-nav-Modal").innerHTML = navBar();
document.getElementById("section-header").innerHTML = topNavBar();
document.getElementById("chatbot-main").innerHTML = chatbot();
document.getElementById("myFooter").innerHTML = footer();

document.getElementById("all-Items-slidebaarBox").innerHTML = slidebar();
document.getElementById("all-Items-Filtering").innerHTML = filtering();
document.getElementById("all-Items-HeadingBox").innerHTML += HeadingSort();


let botopen = false;
document.getElementById("bot-opener").addEventListener("click", () => {
  if (botopen) {
    document.getElementById("chatbot-main").style.display = "none";
    botopen = false;
  } else {
    document.getElementById("chatbot-main").style.display = "block";
    botopen = true;
  }
});
document.getElementById("close-button").addEventListener("click", () => {
  document.getElementById("chatbot-main").style.display = "none";
  botopen = false;
});



let Url = `${URL}?category=tees`;
fetchData(Url).then(function (data) {
  displayData(data);
  document.getElementById("input-min").addEventListener("input", function () {
    filterData(data);
  });
  document.getElementById("input-max").addEventListener("input", function () {
    filterData(data);
  });
  document.getElementById("range-min").addEventListener("change", function () {
    filterData(data);
  });
  document.getElementById("range-max").addEventListener("change", function () {
    filterData(data);
  });

  document.getElementById("priceL2H").addEventListener("click", function () {
    filterDataL2H(data);
  });
  document.getElementById("priceH2L").addEventListener("click", function () {
    filterDataH2L(data);
  });
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
