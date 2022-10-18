let chatbot = ()=>{
    return `<div id="header">
    <div id="profile-div">
      <img
        id="profile-img"
        src="data:image/png;base64,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"
        alt=""
      />
      <div id="chat-title">
        <h2>Blissclub</h2>
        <h4>blissclub</h4>
      </div>
    </div>
    <div id="side-icons">
      <button id="sound"><ion-icon class="sound-icon" name="volume-mute-outline"></ion-icon></button>
    <button id="close-button">close</button>
    </div>
  </div>
  <div id="container" class="container">
    <div id="chat" class="chat">
      <div id="messages" class="messages"></div>
      <div id="input-div">
        <input
          id="chatbot-input"
          type="text"
          placeholder="Say something..."
          autocomplete="off"
          autofocus="true"
        />
        <button id="speak-button">
          <ion-icon id="speak-icon" name="mic"></ion-icon>
        </button>
      </div>
    </div>
  </div>`
}

export {chatbot};