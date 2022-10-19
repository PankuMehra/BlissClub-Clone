import { chatbot } from "../chatbot/chatbotexp.js";
import { footer } from "../utils/footer-exp.js";

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

setTimeout(function () {
  document.getElementById("spinner-button").style.display = "flex";
}, 1000);

let displaySpinner = () => {
  // document.getElementById("spinner-button").style.transform = "translateX(200%)";
  document.getElementById("spinner-button").style.left = "600px";
  document.getElementById("spinner-button").style.bottom = "350px";
  document.getElementById("spinner-button").style.transform = "scale(3)";
  setTimeout(function () {
    document.getElementById("spinner-div").style.display = "flex";
    document.getElementById("spinner-button").style.display = "none";
  }, 300);
};



//spinner js
document.getElementById("spin").addEventListener("click", () => {
  let x = 1024; //min value
  let y = 9999; //max value

  let deg = Math.floor(Math.random() * (x - y)) + y;
  console.log(deg, "random");
  let luckyNo = Math.floor((deg - 1024) / 1122);
  console.log(Math.floor((deg - 1024) / 1122));
  document.getElementById("wheel").style.transform = "rotate(" + deg + "deg)";

  setTimeout (function(){
    
    document.getElementById("coupen-popup").style.display = "flex";
    document.getElementById("spinner-div").style.display = "none";
    if(luckyNo == 0){
      document.getElementById("coupenCode").innerText = "bliss10"
    }else if(luckyNo == 1){
      document.getElementById("coupenCode").innerText = "bliss20"
    }else if(luckyNo == 2){
      document.getElementById("coupenCode").innerText = "bliss30"
    }else if(luckyNo == 3){
      document.getElementById("coupenCode").innerText = "bliss40"
    }else{
      document.getElementById("coupenCode").innerText = "try again later"
    }
  },4000)
});
let coupens = JSON.parse(localStorage.getItem("coupens")) || [];

document.getElementById("coupenCode").addEventListener("click",()=>{
    var text = document.getElementById("coupenCode").innerText;
    if(text!="try again later"){
      var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    let flag = false;
    coupens.forEach(elem => {
      if(elem == text){
        flag = true;
      }
    });
    if(flag == false){
      coupens.push(text);
      localStorage.setItem("coupens",JSON.stringify(coupens));
      alert("text copied");
    }else{
      alert("coupen is already exist");
    }
    }else{
      alert("only coupen code can be copied")
    }
})
document.getElementById("coupenDone").addEventListener("click", ()=>{
  document.getElementById("coupen-popup").style.display = "none";
})
document
  .getElementById("spinner-button")
  .addEventListener("click", displaySpinner);
