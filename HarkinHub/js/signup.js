const signupForm =
document.getElementById("signupForm");



signupForm.addEventListener("submit",function(e){


e.preventDefault();



const user={


name:
document.getElementById("fullname").value,


email:
document.getElementById("email").value,


password:
document.getElementById("password").value


};




localStorage.setItem(

"user",

JSON.stringify(user)

);



alert("Account created successfully!");



window.location.href="login.html";


});