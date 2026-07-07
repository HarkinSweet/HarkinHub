/* Already logged in? Skip login page */

if(localStorage.getItem("isTeacher")==="true"){

    window.location.href="admin.html";

}

const loginButton =
document.getElementById("loginAdmin");

loginButton.onclick=function(){

const password=

document.getElementById(
"adminPassword"
).value;

if(password==="Harkin2026"){

localStorage.setItem(
"isTeacher",
"true"
);

window.location=
"admin.html";

}

else{

document.getElementById(
"loginMessage"
).textContent=

"❌ Incorrect Password";

}

};