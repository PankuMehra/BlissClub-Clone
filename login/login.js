// import { footer } from "../footer/footer-exp.js";
// document.getElementById("foot").innerHTML = footer();
// console.log(footer);
console.log("hlw---1");

document.getElementById("login-button").addEventListener("submit",loginbutton);
var arr = JSON.parse(localStorage.getItem("user")) || [];

function loginbutton(){

  event.preventDefault();
  console.log("hlw");
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value

  if(email=="" || password==""){
    alert("Email or Password is Empty");
  }
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i].email === email && arr[i].password === password) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Login Successfull");
    // window.location.href = "#";
  } else {
    alert("Please Enter Correct Email and Password");
  }
  localStorage.setItem("log-in-not",flag);
}
