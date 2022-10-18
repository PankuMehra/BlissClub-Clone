import { footer } from "../utils/footer-exp.js";
import { navBar, topNavBar } from "../utils/nav-bar-exp.js";

console.log(navBar);
document.getElementById("section-header").innerHTML = topNavBar();
document.getElementById("myFooter").innerHTML = footer();

function ObjCreator(fn, ln, e, p) {
  (this.fname = fn), (this.lname = ln), (this.email = e), (this.password = p);
}

let setUserData = () => {
  event.preventDefault();
  let userArray = JSON.parse(localStorage.getItem("users")) || [];

  let fname = document.getElementById("signup_firstName").value;
  let lname = document.getElementById("signup_lastName").value;
  let email = document.getElementById("signup_email").value;
  let password = document.getElementById("signup_pass").value;

  let flag = true;
  if (fname == "" || email == "" || password == "") {
    document.getElementById(
      "successfullAlert"
    ).innerText = `Fill all the details`;
    document.getElementById("successfullAlert").style.backgroundColor = "red";
    document.getElementById("successfullAlert").style.display = "flex";
    setTimeout(function () {
      document.getElementById("successfullAlert").style.display = "none";
    }, 1350);
  } else if (password.length < 6) {
    document.getElementById(
      "successfullAlert"
    ).innerText = `Password is too short`;
    document.getElementById("successfullAlert").style.backgroundColor = "red";
    document.getElementById("successfullAlert").style.display = "flex";
    setTimeout(function () {
      document.getElementById("successfullAlert").style.display = "none";
    }, 1350);
  } else {
    userArray.map((elem) => {
      if (email == elem.email) {
        document.getElementById(
          "successfullAlert"
        ).innerText = `An account already exists with Username ${elem.email}`;
        document.getElementById("successfullAlert").style.backgroundColor =
          "red";
        document.getElementById("successfullAlert").style.display = "flex";
        setTimeout(function () {
          document.getElementById("successfullAlert").style.display = "none";
        }, 1350);
        flag = false;
      }
    });
    if (flag) {
      let userObj = new ObjCreator(fname, lname, email, password);

      userArray.push(userObj);

      localStorage.setItem("users", JSON.stringify(userArray));
      document.getElementById("successfullAlert").style.display = "flex";

      document.getElementById("successfullAlert").innerText = `Account Created`;
      document.getElementById("successfullAlert").style.backgroundColor =
        "rgb(30, 172, 30)";
      document.getElementById("successfullAlert").style.display = "flex";

      setTimeout(function () {
        // document.getElementById("successfullAlert").style.display = "none";
        location.href = "./login.html";
      }, 1350);
    }
  }
};
document.getElementById("signup-button").addEventListener("click", setUserData);
