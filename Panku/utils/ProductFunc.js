let cartItemstotalqty = JSON.parse(localStorage.getItem("cartItems")) || [];
document.getElementById("cartitemstotalcount").innerHTML =
  cartItemstotalqty.length;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("SLIDEDIVS");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
}

function Changeui() {
  document.getElementById("NAVBARUL").classList.toggle("changewholenav");
  document.getElementById("MOBILECLICK").classList.toggle("MOBILECLICKDISPLAY");
}
var getname = localStorage.getItem("itemName");
var getimage1 = localStorage.getItem("image_1");
var getimage2 = localStorage.getItem("image_2");
var getimage3 = localStorage.getItem("image_3");
var getprice = localStorage.getItem("price");

var itemName = document.createElement("h1");
var image1 = document.createElement("img");
var image1BigSize = document.createElement("img");
var image2 = document.createElement("img");
var image3 = document.createElement("img");
var price = document.createElement("span");

itemName.setAttribute("id", "nameOfTheProduct");

// console.log(getname);
// console.log(getprice);
itemName.innerText = getname;
image1.setAttribute("src", getimage1);
image1BigSize.setAttribute("src", getimage1);
image2.setAttribute("src", getimage2);
image3.setAttribute("src", getimage3);
price.innerText = "$" + getprice;
document.querySelector(".leftSideImageDiv").append(image1, image2, image3);
document.querySelector(".mainImageDiv").append(image1BigSize);
document.getElementById("productNameBox").append(itemName);
document.getElementById("productCost").append(price);

var Size = "Not Selected";
document
  .getElementById("buttonsOfSize1")
  .addEventListener("click", selectSize1);
document
  .getElementById("buttonsOfSize2")
  .addEventListener("click", selectSize2);
document
  .getElementById("buttonsOfSize3")
  .addEventListener("click", selectSize3);
function selectSize1() {
  document.getElementById("buttonsOfSize1").style.borderColor = "black";
  document.getElementById("buttonsOfSize2").style.borderColor = "white";
  document.getElementById("buttonsOfSize3").style.borderColor = "white";
  Size = document.getElementById("buttonsOfSize1").innerText;
}
function selectSize2() {
  document.getElementById("buttonsOfSize1").style.borderColor = "white";
  document.getElementById("buttonsOfSize2").style.borderColor = "black";
  document.getElementById("buttonsOfSize3").style.borderColor = "white";
  Size = document.getElementById("buttonsOfSize2").innerText;
}
function selectSize3() {
  document.getElementById("buttonsOfSize1").style.borderColor = "white";
  document.getElementById("buttonsOfSize2").style.borderColor = "white";
  document.getElementById("buttonsOfSize3").style.borderColor = "black";
  Size = document.getElementById("buttonsOfSize3").innerText;
}

document.getElementById("addToBasket").addEventListener("click", addToCart);

let cartArray = JSON.parse(localStorage.getItem("cartItems")) || [];
function addToCart() {
  var quantity = document.getElementById("quantityOfItem").value;
  let cartObject = {
    name: getname,
    image1: getimage1,
    image2: getimage2,
    image3: getimage3,
    price: getprice,
    size: Size,
    color: Color,
    quantity: quantity,
  };

  cartArray.push(cartObject);
  localStorage.setItem("cartItems", JSON.stringify(cartArray));
  // window.open();
  window.open("../checkout&cartPage/CARTPAGE.html", "_self");
}
