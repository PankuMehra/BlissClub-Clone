import {
  checkout_cart,
  checkout_cart1,
  displayitems,
  displayitems1,
} from "../utils/checkout_cart.js";

document.getElementById("checkout_mid2").innerHTML = checkout_cart();

document.querySelector("#checkout_mid_hidden").innerHTML = checkout_cart1();

// append_adress();

class item {
  constructor(a, b, c, d) {
    this.name = a;
    this.image = b;
    this.price = c;
    this.countofitem = d;
  }
}

let item1 = new item(
  "Bulbull Burgundy",
  "https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB_BulbullBurgundy-Thumbnail_600x.jpg?v=1637662576",
  1499,
  1
);
let item2 = new item(
  "Farah Forest",
  "https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB-Forest-Thumbnail_600x.jpg?v=1644308952",
  1499,
  2
);
let item3 = new item(
  "Farah Forest",
  "https://cdn.shopify.com/s/files/1/0404/0196/1115/products/TUCSB-Forest-Thumbnail_600x.jpg?v=1644308952",
  1499,
  5
);

let allitems = [];
// console.log(item1);
allitems.push(item1, item2, item3);
localStorage.setItem("allitems", JSON.stringify(allitems));

let allitem = JSON.parse(localStorage.getItem("cart_items")) || [];
// console.log(allitem);
// console.log("dskjfhdj");

let currentUser = localStorage.getItem("Username") || "";
// console.log(currentUser)
if (currentUser == "") {
  document.querySelector(".checkout_login_coin").innerText =
    "Login to Redeem BlissCoins";
  // document.querySelector(".checkout_info_c2 > span").innerText = "";
} else {
  document.querySelector(".checkout_info_c2 > span").innerText = "";
  document.querySelector(".checkout_login_coin").innerText = currentUser + " ›";
}

displayitems(allitem);

displayitems1(allitem);
// apply_coupan();

class shipping_items {
  constructor(a, b, c, d, e, f, g, h, i, j) {
    this.email = a;
    this.country = b;
    this.first_name = c;
    this.last_name = d;
    this.adress1 = e;
    this.apartment = f;
    this.city = g;
    this.state = h;
    this.pincode = i;
    this.phone = j;
  }
}

document
  .querySelector("#checkout_button_shipping")
  .addEventListener("click", collect_adress);
// event.preventDefault();

// let shipping_adress=[];
function collect_adress() {
  let email = document.querySelector("#checkout_emailbox").value;
  let country = document.querySelector(".checkout_country_s1").value;
  let first_name = document.querySelector("#checkout_first_name").value;
  let last_name = document.querySelector("#checkout_last_name").value;
  let adress1 = document.querySelector("#checkout_adress1").value;
  let apartment = document.querySelector("#checkout_apartment").value;
  let city = document.querySelector("#checkout_city").value;
  let state = document.querySelector("#checkout_state").value;
  let pincode = document.querySelector("#checkout_pincode").value;
  let phone = document.querySelector("#checkout_phone1").value;
  let adressbag = `${adress1},${apartment},${pincode},${state},${country}`;
  let email_adress = [];
  email_adress.push(email);
  let adress = [];
  adress.push(adressbag);
  let all_shipping_items = new shipping_items(
    email,
    country,
    first_name,
    last_name,
    adress1,
    apartment,
    city,
    state,
    pincode,
    phone
  );
  localStorage.setItem("email", JSON.stringify(email_adress));
  localStorage.setItem("adress", JSON.stringify(all_shipping_items));
  // window.location.href="./Shipping.html";
}
// collect_adress();
localStorage.setItem("couponApplied", false);

let checkCoupon = () => {
  console.log("checkCoupon Called");
  let couponValue = document.getElementById("couponInput1").value;
  let myCoupons = JSON.parse(localStorage.getItem("coupens")) || [];
  let CartTotalPrice = localStorage.getItem("cart_total_price") || 0;
  let couponApplied = localStorage.getItem("couponApplied");
  let couponFound = false;
  if (couponApplied) {
    console.log(couponApplied);
    myCoupons.map((elem) => {
      if (elem == couponValue) {
        couponFound = true;
      }
    });
    if (couponFound == false) {
      document.getElementById(
        "successfullAlert"
      ).innerText = `Wrong Coupon Code`;
      document.getElementById("successfullAlert").style.backgroundColor = "red";
      document.getElementById("successfullAlert").style.display = "flex";
      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
      }, 1350);
    } else {
      if (couponValue == "bliss10") {
        CartTotalPrice = Math.round(CartTotalPrice * (9 / 10));
      } else if (couponValue == "bliss20") {
        CartTotalPrice = Math.round(CartTotalPrice * (8 / 10));
      } else if (couponValue == "bliss30") {
        CartTotalPrice = Math.round(CartTotalPrice * (7 / 10));
      } else if (couponValue == "bliss40") {
        CartTotalPrice = Math.round(CartTotalPrice * (6 / 10));
      }

      document.getElementById("successfullAlert").innerText = `Coupon Applied`;
      document.getElementById("successfullAlert").style.backgroundColor =
        "rgb(30, 172, 30)";
      document.getElementById("successfullAlert").style.display = "flex";
      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
      }, 1350);

      document.getElementById("total_price_span1").innerText = CartTotalPrice;
      document.getElementById("total_price_span2").innerText = CartTotalPrice;
      localStorage.setItem("cart_total_price", CartTotalPrice);
      localStorage.setItem("couponApplied", true);
    }
  } else {
    document.getElementById("successfullAlert").innerText = `Coupon Already Applied`;
    document.getElementById("successfullAlert").style.backgroundColor =
      "red";
    document.getElementById("successfullAlert").style.display = "flex";
    setTimeout(function () {
      document.getElementById("successfullAlert").style.display = "none";
    }, 1350);
  }
  // document.getElementById("couponSubtotal1").innerText = CartTotalPrice;
};

document
  .getElementById("checkoutCouponButton1")
  .addEventListener("click", checkCoupon);
document
  .getElementById("checkoutCouponButton2")
  .addEventListener("click", checkCoupon);
