import { topNavBar, navBar } from "../utils/nav-bar-exp.js";
// import { fetchData } from "../utils/functions.js";
import { sideCart } from "../utils/sideCartFunc.js";
document.getElementById("side-nav-Modal").innerHTML = navBar();
document.getElementById("section-header").innerHTML = topNavBar();
document.getElementById("cartDrawerModal").innerHTML = sideCart();

document
  .querySelector("#side-header-menu-button")
  .addEventListener("click", openSideNavBar);

  // side nav bar
function openSideNavBar() {
  console.log("lol");
  document.getElementById("side-nav-Modal").style.display = "block";
  document.getElementById("side-nav-outer-box").style.transform =
    "translatex(0%)";
  document.getElementById("side-nav-Modal").style.zIndex = "75";
}

document
  .querySelector("#drawer-close-button")
  .addEventListener("click", closeSideNavBar);

function closeSideNavBar() {
  document.getElementById("side-nav-Modal").style.display = "none";
  document.getElementById("side-nav-outer-box").style.transform =
    "translatex(-100%)";
  document.getElementById("side-nav-Modal").style.zIndex = "1";
}

document.getElementById("top-search").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let searchIt = document.getElementById("top-search").value;
    localStorage.setItem("searchIt", searchIt);
    location.href = "./searched.html";
  }
});
document.getElementById("submit-search").addEventListener("click", (event) => {
  // console.log(document.getElementById("top-search").value);
  // if (event.key === "Enter") {
  event.preventDefault();
  let searchIt = document.getElementById("top-search").value;
  localStorage.setItem("searchIt", searchIt);
  location.href = "./searched.html";
  // }
});

document.getElementById("side-submit-search").addEventListener("click", (event) => {
  // if (event.key === "Enter") {
    event.preventDefault();
    let searchIt = document.getElementById("side-search").value;
    localStorage.setItem("searchIt", searchIt);
    location.href = "./searched.html";
  // }
});


let currentUser = localStorage.getItem("Username") || "";

if (currentUser == "") {
  document.getElementById("current-user").innerText = "Login ›";
} else {
  document.getElementById("current-user").innerText = currentUser + " ›";
}

let profileORlogin = () => {
  event.preventDefault();
  if (currentUser == "") {
    console.log("not Logged in");
    location.href = "./login.html";
  } else {
    console.log("Logged in");
    localStorage.clear();
    location.href = "./index.html";
  }
};
document
  .getElementById("header-item-image-account")
  .addEventListener("click", profileORlogin);

document.getElementById("micBox").addEventListener("click", searchVoice);

function searchVoice() {
  if (window.hasOwnProperty("webkitSpeechRecognition")) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById("top-search").value = e.results[0][0].transcript;
      recognition.stop();
      setTimeout(function () {
        let searchIt = document.getElementById("top-search").value;
        localStorage.setItem("searchIt", searchIt);
        location.href = "./searched.html";
      }, 1500);
    };
    recognition.onerror = function (e) {
      recognition.stop();
    };
  }
}

