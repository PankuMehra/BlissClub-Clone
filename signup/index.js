

var arr = [];
function signup() {
  event.preventDefault();
  fname = document.getElementById("signup_firstName").value;
  lname = document.getElementById("signup_lastName").value;
  email = document.getElementById("signup_email").value;
  password = document.getElementById("signup_pass").value;
  var user = {
    fname: fname,
    lname: lname,
    email: email, 
    password: password,
  };
  arr.push(user);
  
  localStorage.setItem("user", JSON.stringify(arr));
  alert("SignUp Succesfully")
  window.location.href = "./index.html";
}



var arr = JSON.parse(localStorage.getItem("user")) || [];
function login() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
 
  
  

  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i].email === email && arr[i].password === password) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Login Successfull");
    window.location.href = "#";
  } else {
    alert("Please Enter Correct Email and Password");
  }
}