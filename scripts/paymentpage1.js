import {
  checkout_cart,
  checkout_cart1,
  displayitems,
  displayitems1,
  shipping_item,
} from "../utils/checkout_cart.js";

document.getElementById("checkout_mid2").innerHTML = checkout_cart();

document.querySelector("#checkout_mid_hidden").innerHTML = checkout_cart1();

let allitem = JSON.parse(localStorage.getItem("cart_items")) || [];
console.log(allitem);
displayitems(allitem);

displayitems1(allitem);

//  document.querySelector(".checkout_adress_div").innerHTML=contact_adress_html();
let CartTotalPrice = localStorage.getItem("cart_total_price");
document.getElementById("total_price_span1").innerText = CartTotalPrice;
document.getElementById("total_price_span2").innerText = CartTotalPrice;

shipping_item();

let checkCoupon = () => {
  console.log("checkCoupon Called");
  let couponValue = document.getElementById("couponInput1").value;
  let myCoupons = JSON.parse(localStorage.getItem("coupens")) || [];
  let CartTotalPrice = localStorage.getItem("cart_total_price") || 0;
  let couponApplied = localStorage.getItem("couponApplied") || false;
  let couponFound = false;
  if (!couponApplied) {
    // console.log(couponApplied);
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
    document.getElementById(
      "successfullAlert"
    ).innerText = `Coupon already Applied`;
    document.getElementById("successfullAlert").style.backgroundColor = "red";
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
