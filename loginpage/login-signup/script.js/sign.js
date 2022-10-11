 class Object {
    constructor(name, email, pass) {
        this.name = name;
        this.email = email;
        this.password = pass;
    }
}

let arr = JSON.parse(localStorage.getItem("users")) || [];
const sign_fun = () => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let obj = new Object(name, email, pass);
    arr.push(obj);
    localStorage.setItem("users", JSON.stringify(arr));
}