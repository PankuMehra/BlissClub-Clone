import { fetchData } from "../utils/functions.js";
import { chatbot } from "../chatbot/chatbotexp.js";
import { footer } from "../utils/footer-exp.js";
import { topNavBar, navBar } from "../utils/nav-bar-exp.js";
import URL from "../URL/URL.js";


document.getElementById("side-nav-Modal").innerHTML = navBar();
document.getElementById("section-header").innerHTML = topNavBar();
document.getElementById("chatbot-main").innerHTML = chatbot();
document.getElementById("myFooter").innerHTML = footer();

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

let productId = localStorage.getItem("productId");
let cartArray = JSON.parse(localStorage.getItem("cart_items")) || [];

cartArray.map((elem) => {
  if (elem.id == productId && elem.added == true) {
    document.getElementById("view-product-addToBasket").style.display = "none";
    document.getElementById("view-product-addedToBasket").style.display =
      "block";
  } else {
    document.getElementById("view-product-addToBasket").style.display = "block";
    document.getElementById("view-product-addedToBasket").style.display =
      "none";
  }
});

class createObj {
  constructor(i, c, n, i1, p1, p2, color, size, q, t) {
    (this.id = i),
      (this.category = c),
      (this.name = n),
      (this.image1 = i1),
      (this.price1 = p1),
      (this.price2 = p2),
      (this.color = color),
      (this.size = size),
      (this.quantity = q),
      (this.added = t);
  }
}

document
  .getElementById("view-product-addToBasket")
  .addEventListener("click", () => {
    let itemColor = document.getElementById("selectedColor").innerText;
    console.log("itemColor:", itemColor);
    let itemSize = document.getElementById("selectedSize").innerText;
    console.log("itemSize:", itemSize);
    let itemQuantity = document.getElementById(
      "view-product-selectQuantity"
    ).value;
    console.log("itemQuantity:", itemQuantity);

    if (itemColor == "") {
      document.getElementById("successfullAlert").innerText = `Select Color`;
      document.getElementById("successfullAlert").style.backgroundColor = "red";
      document.getElementById("successfullAlert").style.display = "flex";
      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
      }, 1350);
    } else if (itemSize == "") {
      document.getElementById("successfullAlert").innerText = `Select Size`;
      document.getElementById("successfullAlert").style.backgroundColor = "red";
      document.getElementById("successfullAlert").style.display = "flex";
      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
      }, 1350);
    } else {
      document.getElementById("successfullAlert").innerText = `Added to Cart`;
      document.getElementById("successfullAlert").style.backgroundColor =
        "rgb(30, 172, 30)";
      document.getElementById("successfullAlert").style.display = "flex";
      document.getElementById("view-product-addToBasket").style.display =
        "none";
      document.getElementById("view-product-addedToBasket").style.display =
        "block";

      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
        
        let leggingsUrl = `${URL}?id=${productId}`;
        fetchData(leggingsUrl).then(function (data) {
          console.log("data:", data);

          let cartObject = new createObj(
            data[0].id,
            data[0].category,
            data[0].name,
            data[0].image1,
            data[0].price1,
            data[0].price2,
            itemColor,
            itemSize,
            itemQuantity,
            true
            );
            
            cartArray.push(cartObject);
            localStorage.setItem("cart_items", JSON.stringify(cartArray));
            location.href = "./viewProduct.html";
        });
      }, 1350);
    }
  });

// let productId = localStorage.getItem("productId");
let leggingsUrl = `${URL}`;
fetchData(leggingsUrl).then(function (data) {
  // console.log(data);

  document.getElementById("view-product-mainImageDiv").innerHTML = `<img src="${
    data[Number(productId) - 1].image1
  }" alt="">`;
  document.getElementById("view-product-itemName").innerText =
    data[Number(productId) - 1].name;
  document.getElementById("view-product-price").innerText =
    "Rs. " + data[Number(productId) - 1].price1;
  document.getElementById("view-product-strikedPrice").innerText =
    "Rs. " + data[Number(productId) - 1].price2;

  for (let i = 0; i < 5; i++) {
    let randomNum = Math.round(Math.random() * (data.length - 1));
    console.log(randomNum);
    let leftImage = document.createElement("img");
    leftImage.src = data[randomNum].image1;
    leftImage.id = "view-product-MightLike";
    document.getElementById("view-product-LeftSideImages").append(leftImage);

    leftImage.addEventListener("click", setItemId);

    function setItemId() {
      localStorage.setItem("productId", randomNum + 1);
      location.href = "./viewProduct.html";
    }
  }
});

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
  document.getElementById("selectedColor").innerText = "Bulbull Burgundy";
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
  document.getElementById("selectedColor").innerText = "Naina Navy";
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
  document.getElementById("selectedColor").innerText = "Gowri Grey";
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
  document.getElementById("selectedColor").innerText = "Farah Forest";
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
  document.getElementById("selectedColor").innerText = "Monica Mauve";
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
  document.getElementById("view-product-sizeChartModalBox").style.display =
    "flex";
};
let showSizeName = () => {
  event.preventDefault();
  document.getElementById("view-product-sizeNameModalBox").style.zIndex = "20";
  document.getElementById("view-product-sizeNameModalBox").style.display =
    "flex";
};

document
  .querySelector("#view-product-sizeDetails > a:nth-child(1)")
  .addEventListener("click", showSizeChart);
document
  .querySelector("#view-product-sizeDetails > a:nth-child(2)")
  .addEventListener("click", showSizeName);

// Size Chart and Size Name details Iframe Showing Function
let hideSizeChart = () => {
  document.getElementById("view-product-sizeChartModalBox").style.zIndex = "1";
  document.getElementById("view-product-sizeChartModalBox").style.display =
    "none";
};
let hideSizeName = () => {
  document.getElementById("view-product-sizeNameModalBox").style.zIndex = "1";
  document.getElementById("view-product-sizeNameModalBox").style.display =
    "none";
};

document
  .getElementById("view-product-sizeChartModalBox")
  .addEventListener("click", hideSizeChart);
document
  .getElementById("view-product-sizeNameModalBox")
  .addEventListener("click", hideSizeName);

// Show Size Name over buttons on Selecting
let getSizeName1 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton1 > button:nth-child(1)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSizeName2 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton1 > button:nth-child(2)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSizeName3 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton1 > button:nth-child(3)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSizeName4 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton1 > button:nth-child(4)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSize2Name1 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton2 > button:nth-child(1)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSize2Name2 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton2 > button:nth-child(2)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSize2Name3 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton2 > button:nth-child(3)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
};
let getSize2Name4 = () => {
  let selectedSize = document.querySelector(
    "#view-product-sizeButton2 > button:nth-child(4)"
  ).innerText;
  document.querySelector("#selectedSize").innerText = selectedSize;
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
