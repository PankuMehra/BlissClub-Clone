let users = JSON.parse(localStorage.getItem('users')) || [];
function sign_fun(){
    var firstName = document.getElementById("namef").value;
    let lastName = document.getElementById("namel").value;
    let fullName = firstName +" "+lastName;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj ={
        firstName: firstName,
        lastName: lastName,
        FullName: fullName,
        email: email,
        password: password
    }

    users.push(obj);
    localStorage.setItem('users', JSON.stringify(users));

}