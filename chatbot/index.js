document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("chatbot-input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/ can i /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/ the /g, " ");
  
    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    // } else if (text.match(/(corona|covid|virus)/gi)) {
    //   // If no match, check if message contains `coronavirus`
    //   product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    // Update DOM
    addChat(input, product);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
  }
  
  function addChat(input, product) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<span>${input}</span><img src="data:image/png;base64,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" class="avatar">`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = `data:image/png;base64,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`;
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botImg);
    botDiv.appendChild(botText);
  
    
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Fake delay
    setTimeout(() => {
      botText.innerText = `${product}`;
      textToSpeech(product)
    }, 2000
    )
  
  }