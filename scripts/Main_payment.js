function cardName() {
  var x = document.getElementById("name").value;
  document.getElementById("cardname").innerHTML = x;
}
function cardNumberOne() {
  var x = document.getElementById("cdnum1").value;
  document.getElementById("cardnumber1").innerHTML = x;
}
function cardNumberTwo() {
  var x = document.getElementById("cdnum2").value;
  document.getElementById("cardnumber2").innerHTML = x;
}
function cardNumberThree() {
  var x = document.getElementById("cdnum3").value;
  document.getElementById("cardnumber3").innerHTML = x;
}
function cardNumberFour() {
  var x = document.getElementById("cdnum4").value;
  document.getElementById("cardnumber4").innerHTML = x;
}
function expiracyDate() {
  var x = document.getElementById("exdate").value;
  document.getElementById("expire").innerHTML = "Expiracy Date" + " " + x;
}
function sortCode() {
  var x = document.getElementById("sort").value;
  document.getElementById("sortcode").innerHTML = "Amount: ₹" + " " + x;
}
function securityCode() {
  var x = document.getElementById("security").value;
  document.getElementById("sec").innerHTML = x;
}
function closeIcons() {
  document.getElementById("ico0").style.display = "none";
  document.getElementById("ico1").style.display = "none";
  document.getElementById("ico2").style.display = "none";
  document.getElementById("ico3").style.display = "none";
}
function openIconOne() {
  document.getElementById("ico0").style.display = "block";
  document.getElementById("cardType").innerHTML = "Visa";
}
function openIconTwo() {
  document.getElementById("ico1").style.display = "block";
  document.getElementById("cardType").innerHTML = "Amex";
}
function openIconThree() {
  document.getElementById("ico2").style.display = "block";
  document.getElementById("cardType").innerHTML = "Mastercard";
}
function openIconFour() {
  document.getElementById("ico3").style.display = "block";
  document.getElementById("cardType").innerHTML = "Discover";
}

let pay_button = document.getElementById("payment_process_btn");
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
let btn_img = document.createElement("img");
btn_img.src =
  "http://38.media.tumblr.com/578d2dd48a0a53e54e7e05de6043155c/tumblr_nrlr6tulGV1r2geqjo1_540.gif";
pay_button.addEventListener(
  "click",
  debounce(function () {
    alert("Payment Successful");

    window.location.href = "./Thank_you.html";
  }, 2000)
);

// Attach card icon click handlers instead of inline onclicks
[
  "fa-fa-cc-visa1",
  "fa-fa-cc-amex1",
  "fa-fa-cc-mastercard1",
  "fa-fa-cc-discover1",
].forEach((id, idx) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", () => {
    closeIcons();
    if (idx === 0) openIconOne();
    if (idx === 1) openIconTwo();
    if (idx === 2) openIconThree();
    if (idx === 3) openIconFour();
  });
});

// const thankyou_page=(func,delay)=>{

// }
