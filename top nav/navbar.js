import {navBar} from "../top nav/nav-bar-exp.js";
import {topNavBar} from "../top nav/nav-bar-exp.js";
document.getElementById("side-nav-Modal").innerHTML=navBar();
document.getElementById("section-header").innerHTML=topNavBar();
console.log(navBar);



document.querySelector("#side-header-menu-button").addEventListener("click",openSideNavBar);

function openSideNavBar(){
    document.getElementById("side-nav-outer-box").style.transform = "translatex(0%)";
    document.getElementById("side-nav-Modal").style.zIndex = "75";

}

document.querySelector("#drawer-close-button").addEventListener("click",closeSideNavBar);
document.querySelector("#side-nav-Modal").addEventListener("click",closeSideNavBar);

function closeSideNavBar(){
    document.getElementById("side-nav-outer-box").style.transform = "translatex(-100%)";
    document.getElementById("side-nav-Modal").style.zIndex = "1";
}

document.getElementById("top-search").addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit-search").click();
      }
})
document.getElementById("submit-search").addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(document.getElementById("top-search").value); 
})

