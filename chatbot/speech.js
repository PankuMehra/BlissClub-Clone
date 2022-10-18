// Text to Speech
let flag = true;
const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  document.getElementById("sound").addEventListener("click",()=>{
   if(flag == true){
    flag = false;
    document.getElementById("sound").innerHTML = `<ion-icon class="sound-icon" name="volume-high-outline">`
    let voice = new SpeechSynthesisUtterance(string);
    voice.text = string;
    voice.lang = "en-US";
    voice.volume = 1;
    voice.rate = 1.4;
    voice.pitch = 1; // Can be 0, 1, or 2
    synth.speak(voice);
  }else{
    flag = true;
    document.getElementById("sound").innerHTML = `<ion-icon class="sound-icon" name="volume-mute-outline"></ion-icon>`
    let voice = new SpeechSynthesisUtterance(string);
    voice.text = "";
    voice.lang = "en-US";
    voice.volume = 1;
    voice.rate = 1.4;
    voice.pitch = 1; // Can be 0, 1, or 2
    synth.speak(voice);
   }
  })
  
}