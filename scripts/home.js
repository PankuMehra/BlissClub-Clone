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

