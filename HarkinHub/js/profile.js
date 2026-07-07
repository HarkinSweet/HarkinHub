const user =
JSON.parse(localStorage.getItem("user")) || {};

document.getElementById("profileName").textContent =
user.name || "Student";

document.getElementById("profileClass").textContent =
user.class || "HarkinHub Student";

animateCounter(

document.getElementById("profileStreak"),

Number(localStorage.getItem("studyStreak")) || 1

);
animateCounter(

document.getElementById("profileXP"),

Number(localStorage.getItem("xp")) || 0

);

animateCounter(

document.getElementById("profileLevel"),

Number(localStorage.getItem("level")) || 1

);

document.getElementById("profileBudget").textContent =
"₦" + (localStorage.getItem("budgetBalance") || 0);

document.getElementById("profileHomework").textContent =
Data.homework().length;

document.getElementById("profilePoints").textContent =
Data.housePoints();

const container =
document.getElementById("profileAchievements");

const badges = [

"🎉",

"📚",

"🔥",

"⭐",

"👑"

];

badges.forEach(icon=>{

const div=document.createElement("div");

div.style.fontSize="45px";

div.textContent=icon;

container.appendChild(div);

});