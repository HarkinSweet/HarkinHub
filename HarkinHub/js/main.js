const APP_VERSION = "1.0";

/* =========================
   HARKINHUB CORE
   AUTH + THEME ONLY
========================= */

/* LOGIN GUARD */
if (
    !["login.html", "signup.html", "index.html"].includes(
        window.location.pathname.split("/").pop()
    )
){
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

/* THEME */
function setTheme(isDark){
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

function initTheme(){
    const saved = localStorage.getItem("theme") === "dark";
    setTheme(saved);

    const btn = document.getElementById("themeToggle");

    if (btn) {
        btn.textContent = saved ? "☀️" : "🌙";

        btn.onclick = () => {
            const isDark = !document.body.classList.contains("dark");
            setTheme(isDark);
            btn.textContent = isDark ? "☀️" : "🌙";
        };
    }
}

window.addEventListener("DOMContentLoaded", initTheme);

/* LOGOUT */
window.logout = function(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
};

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("sw.js")
        .then(() => console.log("Service Worker Registered"));

    });

}

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});

document.addEventListener("keydown", (e) => {

    const tag = e.target.tagName;

    // Ignore shortcuts while typing
    if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        e.target.isContentEditable
    ) {
        return;
    }

    switch (e.key.toLowerCase()) {
        case "h":
            location.href = "homework.html";
            break;
        case "q":
            location.href = "quiz.html";
            break;
        case "b":
            location.href = "budget.html";
            break;
        case "a":
            location.href = "ai.html";
            break;
    }

});

window.addEventListener("load",()=>{

const splash=document.getElementById("splashScreen");

if(splash){

setTimeout(()=>{

splash.style.display="none";

},1500);

}

});

window.showToast = function(message){

    const toast = document.getElementById("toast");

    if(!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);

};