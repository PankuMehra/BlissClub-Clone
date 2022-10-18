import { footer } from "../utils/footer-exp.js";
import { navBar, topNavBar } from "../utils/nav-bar-exp.js";

console.log(navBar);
document.getElementById("section-header").innerHTML = topNavBar();
document.getElementById("myFooter").innerHTML = footer();

let checkUser = () => {
  event.preventDefault();
  let userArray = JSON.parse(localStorage.getItem("users")) || [];
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let flag = true;
  userArray.map(function (elem) {
    if (email == elem.email && password == elem.password) {
      // alert("Login successful!");
      document.getElementById(
        "successfullAlert"
      ).innerText = `Login Successful !`;
      document.getElementById("successfullAlert").style.backgroundColor =
        "dodgerblue";
        document.getElementById("successfullAlert").style.display = "flex";
        flag = false;
      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
        localStorage.setItem("Username", `${elem.fname} ${elem.lname}`);
        location.href = "./index.html";

      }, 1350);
    } else if (email == elem.email && password != elem.password) {
      // alert("Wrong credentials");

      document.getElementById(
        "successfullAlert"
      ).innerText = `Wrong credentials`;
      document.getElementById("successfullAlert").style.backgroundColor = "red";
      document.getElementById("successfullAlert").style.display = "flex";
      flag = false;
      setTimeout(function () {
        document.getElementById("successfullAlert").style.display = "none";
        return;
      }, 1350);
    }
  });
  if (flag) {
    // alert("User doesn't exist, Sign Up");

    document.getElementById(
      "successfullAlert"
    ).innerText = `User doesn't exist, Sign Up`;
    document.getElementById("successfullAlert").style.backgroundColor = "red";
    document.getElementById("successfullAlert").style.display = "flex";
    setTimeout(function () {
      document.getElementById("successfullAlert").style.display = "none";
    }, 1350);

  }
};
document.getElementById("login-button").addEventListener("click", checkUser);
