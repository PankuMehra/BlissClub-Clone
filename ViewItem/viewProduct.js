// Color Buttons Border switching Function
let SelectColor1 = () => {
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(2)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(3)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(4)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(5)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(1)"
  ).id = "view-product-outer-select-color1";
  document.getElementById("view-product-colorForTheDress").innerText =
    "SELECT YOUR COLOR: Bulbull Burgundy";
};
let SelectColor2 = () => {
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(1)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(3)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(4)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(5)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(2)"
  ).id = "view-product-outer-select-color2";
  document.getElementById("view-product-colorForTheDress").innerText =
    "SELECT YOUR COLOR: Naina Navy";
};
let SelectColor3 = () => {
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(1)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(2)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(4)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(5)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(3)"
  ).id = "view-product-outer-select-color3";
  document.getElementById("view-product-colorForTheDress").innerText =
    "SELECT YOUR COLOR: Gowri Grey";
};
let SelectColor4 = () => {
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(1)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(2)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(3)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(5)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(4)"
  ).id = "view-product-outer-select-color4";
  document.getElementById("view-product-colorForTheDress").innerText =
    "SELECT YOUR COLOR: Farah Forest";
};
let SelectColor5 = () => {
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(1)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(2)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(3)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(4)"
  ).id = "";
  document.querySelector(
    "#view-product-select-color-Box > div:nth-child(5)"
  ).id = "view-product-outer-select-color5";
  document.getElementById("view-product-colorForTheDress").innerText =
    "SELECT YOUR COLOR: Monica Mauve";
};

document
  .querySelector("#view-product-select-color-Box > div:nth-child(1)")
  .addEventListener("click", SelectColor1);
document
  .querySelector("#view-product-select-color-Box > div:nth-child(2)")
  .addEventListener("click", SelectColor2);
document
  .querySelector("#view-product-select-color-Box > div:nth-child(3)")
  .addEventListener("click", SelectColor3);
document
  .querySelector("#view-product-select-color-Box > div:nth-child(4)")
  .addEventListener("click", SelectColor4);
document
  .querySelector("#view-product-select-color-Box > div:nth-child(5)")
  .addEventListener("click", SelectColor5);

// Size Chart and Size Name details Iframe Showing Function
let showSizeChart = () => {
  event.preventDefault();
  document.getElementById("view-product-sizeChartModalBox").style.zIndex = "20";
};
let showSizeName = () => {
  event.preventDefault();
  document.getElementById("view-product-sizeNameModalBox").style.zIndex = "20";
};

document
  .querySelector("#view-product-sizeDetails > a:nth-child(1)")
  .addEventListener("click", showSizeChart);
document
  .querySelector("#view-product-sizeDetails > a:nth-child(2)")
  .addEventListener("click", showSizeName);

// Size Chart and Size Name details Iframe Showing Function
let hideSizeChart = () => {
  // event.preventDefault();
  console.log("ihugy");
  document.getElementById("view-product-sizeChartModalBox").style.zIndex = "1";
};
let hideSizeName = () => {
  // event.preventDefault();
  console.log("ihugy");
  document.getElementById("view-product-sizeNameModalBox").style.zIndex = "1";
};

document
  .getElementById("view-product-sizeChartModalBox")
  .addEventListener("click", hideSizeChart);
document
  .getElementById("view-product-sizeNameModalBox")
  .addEventListener("click", hideSizeName);

// Show Size Name over buttons on Selecting
let getSizeName1 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton1 > button:nth-child(1)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSizeName2 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton1 > button:nth-child(2)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSizeName3 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton1 > button:nth-child(3)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSizeName4 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton1 > button:nth-child(4)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSize2Name1 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton2 > button:nth-child(1)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSize2Name2 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton2 > button:nth-child(2)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSize2Name3 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton2 > button:nth-child(3)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};
let getSize2Name4 = () => {
  let selectedSize = document.querySelector("#view-product-sizeButton2 > button:nth-child(4)").innerText;
  document.querySelector("#view-product-typeOfFit").innerText = `SELECT YOUR SIZE: ${selectedSize}`;
};

document
  .querySelector("#view-product-sizeButton1 > button:nth-child(1)")
  .addEventListener("click", getSizeName1);
document
  .querySelector("#view-product-sizeButton1 > button:nth-child(2)")
  .addEventListener("click", getSizeName2);
document
  .querySelector("#view-product-sizeButton1 > button:nth-child(3)")
  .addEventListener("click", getSizeName3);
document
  .querySelector("#view-product-sizeButton1 > button:nth-child(4)")
  .addEventListener("click", getSizeName4);

document
  .querySelector("#view-product-sizeButton2 > button:nth-child(1)")
  .addEventListener("click", getSize2Name1);
document
  .querySelector("#view-product-sizeButton2 > button:nth-child(2)")
  .addEventListener("click", getSize2Name2);
document
  .querySelector("#view-product-sizeButton2 > button:nth-child(3)")
  .addEventListener("click", getSize2Name3);
document
  .querySelector("#view-product-sizeButton2 > button:nth-child(4)")
  .addEventListener("click", getSize2Name4);
