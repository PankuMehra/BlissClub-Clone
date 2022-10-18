import { chatbot } from "../chatbot/chatbotexp.js";
import { footer } from "../utils/footer-exp.js";
import { topNavBar, navBar } from "../utils/nav-bar-exp.js";


document.getElementById("side-nav-Modal").innerHTML = navBar();
document.getElementById("section-header").innerHTML = topNavBar();
document.getElementById("chatbot-main").innerHTML = chatbot();
document.getElementById("myFooter").innerHTML = footer();

