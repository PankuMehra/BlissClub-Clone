document.querySelector("#side-header-menu-button").addEventListener("click",openSideNavBar);

function openSideNavBar(){
    document.getElementById("side-nav-outer-box").style.transform = "translatex(0%)";
}

document.querySelector("#drawer-close-button").addEventListener("click",closeSideNavBar);

function closeSideNavBar(){
    document.getElementById("side-nav-outer-box").style.transform = "translatex(-100%)";
}

document.getElementById("top-input-search-procucts").addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit-search").click();
      }
})
document.getElementById("submit-search").addEventListener("click", ()=>{
        event.preventDefault();
        console.log(document.getElementById("top-input-search-procucts").value); 
})