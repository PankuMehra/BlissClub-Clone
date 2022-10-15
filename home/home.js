// import {navBar} from "../top nav/nav-bar-exp.js";
// import {topNavBar} from "../top nav/nav-bar-exp.js";
// console.log(navBar);
// document.getElementById("side-nav-Modal").innerHTML=navBar();
// document.getElementById("section-header").innerHTML=topNavBar();
// console.log(navBar);

import {chatbot} from "../chatbot/chatbotexp.js";

document.getElementById("chatbot-main").innerHTML = chatbot();

let botopen = false;
document.getElementById("bot-opener").addEventListener("click",()=>{
    if(botopen){
        document.getElementById("chatbot-main").style.display = "none";
    botopen = false;
    }else{
        document.getElementById("chatbot-main").style.display = "block";
    botopen = true;
    }
})
document.getElementById("close-button").addEventListener("click",()=>{
    document.getElementById("chatbot-main").style.display = "none";
    botopen = false;
})
