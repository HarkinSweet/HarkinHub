alert("login.js loaded");

const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function(e){

e.preventDefault();


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



let user =
JSON.parse(localStorage.getItem("user"));



if(!user){

alert("No account found. Please signup first.");

window.location.href="signup.html";

return;

}



if(
email === user.email &&
password === user.password
){


localStorage.setItem(
"loggedIn",
"true"
);


window.location.href="dashboard.html";


}

else{


alert("Incorrect email or password");


}


});