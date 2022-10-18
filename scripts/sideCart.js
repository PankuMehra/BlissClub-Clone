import { drawerMightLike, sideCartFooter, cartData } from "../utils/sideCartFunc.js";
import { fetchData } from "../utils/functions.js";

let cartArray = JSON.parse(localStorage.getItem("cart_items"));

document.getElementById("sideDrawer-Footer").innerHTML = sideCartFooter(cartArray);
cartData(cartArray);

// Show Modal Function
let showModal = () => {
  document.getElementById("sideDrawer-Footer").style.transform =
    "translateY(0%)";
};

document.getElementById("home-CartIcon").addEventListener("click", showModal);
// Hide Modal Function
let hideModal = () => {
  document.getElementById("sideDrawer-Footer").style.transform =
    "translateY(110%)";
  };
document
.getElementById("sideDrawer-closeButton")
.addEventListener("click", hideModal);

// Show Random Product Function at the place of You may also Like


let productId = Math.round(Math.random() * 150);
let Url = `https://blissclub.herokuapp.com/data/${productId}`;
fetchData(Url).then(function (data) {
  document.getElementById("drawerUp").innerHTML = drawerMightLike(data);
  
  // Function to open the Drawer of may also Like up and down
  let Plus = true;
  let showRandomProduct = () => {
    if (Plus) {
      document.getElementById("drawerUp").style.transform = "translateY(82%)";
      // document.getElementById("drawerUp-product").style.display = "none";
      document.getElementById("drawerUp-PlusMinus").innerHTML = `<i class="fa-solid fa-plus" id="addProduct"></i>`;
      document.getElementById("sideDrawer-ProductBox").style.height = "300px";
      
      Plus = false;
    } else if (!Plus) {
      Plus = true;
      document.getElementById("drawerUp").style.transform = "translateY(0%)";
      document.getElementById("sideDrawer-ProductBox").style.height = "138px";
      // document.getElementById("drawerUp-product").style.display = "flex";
      document.getElementById("drawerUp-PlusMinus").innerHTML = `<i class="fa-solid fa-minus" id="minusProduct"></i>`;
    }
  };

  document
    .getElementById("drawerUp-PlusMinus")
    .addEventListener("click", showRandomProduct);

  // Select Colour Boxes Function
  let SelectColor1 = () => {
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(2)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(3)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(4)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(5)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(1)").id =
      "drawerUp-outer-select-color1";
  };
  let SelectColor2 = () => {
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(1)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(3)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(4)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(5)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(2)").id =
      "drawerUp-outer-select-color2";
  };
  let SelectColor3 = () => {
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(1)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(2)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(4)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(5)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(3)").id =
      "drawerUp-outer-select-color3";
  };
  let SelectColor4 = () => {
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(1)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(2)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(3)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(5)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(4)").id =
      "drawerUp-outer-select-color4";
  };
  let SelectColor5 = () => {
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(1)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(2)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(3)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(4)").id =
      "";
    document.querySelector("#drawerUp-select-color-Box > div:nth-child(5)").id =
      "drawerUp-outer-select-color5";
  };

  document
    .querySelector("#drawerUp-select-color-Box > div:nth-child(1)")
    .addEventListener("click", SelectColor1);
  document
    .querySelector("#drawerUp-select-color-Box > div:nth-child(2)")
    .addEventListener("click", SelectColor2);
  document
    .querySelector("#drawerUp-select-color-Box > div:nth-child(3)")
    .addEventListener("click", SelectColor3);
  document
    .querySelector("#drawerUp-select-color-Box > div:nth-child(4)")
    .addEventListener("click", SelectColor4);
  document
    .querySelector("#drawerUp-select-color-Box > div:nth-child(5)")
    .addEventListener("click", SelectColor5);
});

