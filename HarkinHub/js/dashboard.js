console.log("Dashboard Loaded");

/* =========================
   DOM ELEMENTS
========================= */

const homeworkCount = document.getElementById("homeworkCount");
const classCount = document.getElementById("classCount");
const announcementCount = document.getElementById("announcementCount");
const pointsCount = document.getElementById("pointsCount");

const todayClasses = document.getElementById("todayClasses");
const upcomingHomework = document.getElementById("upcomingHomework");

const greeting = document.getElementById("greeting");
const date = document.getElementById("date");
const clock = document.getElementById("clock");

const studentName = document.getElementById("studentName");
const studentNameHero = document.getElementById("studentNameHero");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

const xpCount = document.getElementById("xpCount");
const levelCount = document.getElementById("levelCount");

const studyCount =
document.getElementById("studyCount");

const pomodoroCount =
document.getElementById("pomodoroCount");

const achievementPopup =
document.getElementById("achievementPopup");

const popupTitle =
document.getElementById("popupTitle");

const popupDescription =
document.getElementById("popupDescription");

const popupIcon =
document.getElementById("popupIcon");

const closeAchievement =
document.getElementById("closeAchievement");

const unlockSound =
new Audio("sounds/sounds.mp3");

const xpGain =
document.getElementById("xpGain");


/* =========================
   XP SYSTEM
========================= */

let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

function updateXP() {

    if (xpCount)
        animateCounter(
    xpCount,
    xp
);

    if (levelCount)
        animateCounter(
    levelCount,
    level
);
}

/* =========================
   NOTIFICATIONS
========================= */

const notificationBtn =
document.getElementById("notificationBtn");

const notificationPanel =
document.getElementById("notificationPanel");

const notificationList =
document.getElementById("notificationList");

const notificationCount =
document.getElementById("notificationCount");

const streakCount = document.getElementById("streakCount");

const homeworkChart = document.getElementById("homeworkChart");

const quote =
document.getElementById("quote");

const newQuote =
document.getElementById("newQuote");

const achievementContainer =
document.getElementById("achievementContainer");

const achievements = [

{
    icon:"🎉",
    title:"First Step",
    description:"Add your first homework.",
    unlocked:false
},

{
    icon:"📚",
    title:"Scholar",
    description:"Add 10 homework tasks.",
    unlocked:false
},

{
    icon:"🔥",
    title:"On Fire",
    description:"Reach a 7-day streak.",
    unlocked:false
},

{
    icon:"⭐",
    title:"Point Collector",
    description:"Earn 100 house points.",
    unlocked:false
},

{
    icon:"👑",
    title:"Harkin Legend",
    description:"Unlock every badge.",
    unlocked:false
}

];

/* =========================
   GREETING, DATE & CLOCK
========================= */

function updateGreeting(){

    if(!greeting) return;

    const user =
    JSON.parse(localStorage.getItem("user")) || {};

    const name = user.name || "Student";

    const hour = new Date().getHours();

    let text="";

    if(hour<12){

        text="☀️ Good Morning";

    }

    else if(hour<18){

        text="🌤 Good Afternoon";

    }

    else{

        text="🌙 Good Evening";

    }

    greeting.textContent =
    `${text}, ${name}`;

}

function updateDate() {

    date.textContent = new Date().toLocaleDateString("en-GB", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

}

function updateClock(){

    if(!clock) return;

    clock.textContent =
    new Date().toLocaleTimeString([],{

        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"

    });

}

/* =========================
   LOAD DASHBOARD DATA
========================= */

function loadDashboard(){   
    const user = JSON.parse(localStorage.getItem("user")) || {};

if (studentName)
    studentName.textContent = user.name || "Student";

if (studentNameHero)
    studentNameHero.textContent = user.name || "Student";
    const homework = Data.homework();
    const percent = Math.min((homework.length / 10) * 100, 100);

if (progressFill)
    progressFill.style.width = percent + "%";

if (progressText)
    progressText.textContent =
        Math.round(percent) + "% Full";
    const timetable = Data.timetable();
    const announcements = Data.announcements();
    const points = Data.housePoints();

    const study =
JSON.parse(localStorage.getItem("study")) || [];

if(studyCount)

studyCount.textContent=study.length;

const sessions =
Number(localStorage.getItem("pomodoroSessions")) || 0;

if(pomodoroCount){

pomodoroCount.textContent=sessions;

}

animateCounter(
    homeworkCount,
    homework.length
);

animateCounter(
    classCount,
    timetable.length
);

animateCounter(
    announcementCount,
    announcements.length
);

animateCounter(
    pointsCount,
    points
);



    /* STUDY STREAK */

let streak = Number(localStorage.getItem("studyStreak")) || 1;

const today = new Date().toDateString();
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit !== today) {

    streak++;

    localStorage.setItem("studyStreak", streak);
    localStorage.setItem("lastVisit", today);

}

if (streakCount) {
    animateCounter(streakCount, streak);
}

    /* STATS */
    if (homeworkCount)
        homeworkCount.textContent = homework.length;

    if (classCount)
        classCount.textContent = timetable.length;

    if (announcementCount)
        announcementCount.textContent = announcements.length;

    if (pointsCount)
        pointsCount.textContent = points;

    /* CLASSES */
    if (todayClasses){
        todayClasses.innerHTML = "";

        timetable.forEach(c => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${c.subject}</strong> <span>${c.time}</span>`;
            todayClasses.appendChild(li);
        });
    }

    /* HOMEWORK */
    if (upcomingHomework){
        upcomingHomework.innerHTML = "";

        homework.forEach(h => {
            const li = document.createElement("li");

            if (typeof h === "string") {
                li.innerHTML = `<span>${h}</span>`;
            } else {
                li.innerHTML = `<span>${h.title}</span> <span>${h.due}</span>`;
            }

            upcomingHomework.appendChild(li);
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

    loadHomeworkChart();

    loadNotifications();

    loadAchievements();

    loadTodos();

    randomQuote();
    
    updateXP();

    updateGreeting();
    updateDate();
    updateClock();

    setInterval(updateClock, 1000);

});

setInterval(() => {

    updateGreeting();
    updateDate();
    updateClock();

}, 1000);

window.onload=function(){

document.getElementById("loader").style.display="none";

}

/* =========================
   WEEKLY HOMEWORK CHART
========================= */

let chart;

function loadHomeworkChart() {

    if (!homeworkChart) return;

    const homework = Data.homework();

    const data = [
        Math.max(homework.length - 6, 0),
        Math.max(homework.length - 5, 0),
        Math.max(homework.length - 4, 0),
        Math.max(homework.length - 3, 0),
        Math.max(homework.length - 2, 0),
        Math.max(homework.length - 1, 0),
        homework.length
    ];

    if (chart) {
        chart.destroy();
    }


console.log(homeworkChart);
console.log(typeof Chart);

    chart = new Chart(homeworkChart, {

        type: "line",

        data: {

            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{

                label: "Homework",

                data: data,

                borderWidth: 3,

                fill: true,

                tension: 0.4

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

/* =========================
   NOTIFICATION CENTER
========================= */

function loadNotifications() {

    if (!notificationList) return;

    notificationList.innerHTML = "";

    const notifications = [];

    const homework = Data.homework();
    const announcements = Data.announcements();

    homework.forEach(hw => {

        const title =
            typeof hw === "string"
            ? hw
            : hw.title;

        notifications.push(
            "📚 Homework: " + title
        );

    });

    announcements.forEach(a => {

        const title =
            typeof a === "string"
            ? a
            : a.title;

        notifications.push(
            "📢 " + title
        );

    });

    notificationCount.textContent =
        notifications.length;

    if (notifications.length === 0){

        notificationList.innerHTML =
        "<li>No notifications yet.</li>";

        return;

    }

    notifications.forEach(text => {

        const li = document.createElement("li");

        li.textContent = text;

        notificationList.appendChild(li);

    });

}
/* =========================
   TOGGLE NOTIFICATIONS
========================= */

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        notificationPanel.classList.toggle("show");

    });

}

/* =========================
   ACHIEVEMENTS
========================= */

function loadAchievements() {

    if (!achievementContainer) return;

    const homework = Data.homework();
    const points = Data.housePoints();

    const streak =
        Number(localStorage.getItem("studyStreak")) || 1;

    let unlocked =
JSON.parse(localStorage.getItem("unlockedAchievements")) || {};

if(homework.length >= 1)
    unlocked.firstStep = true;

if(homework.length >= 10)
    unlocked.scholar = true;

if(streak >= 7)
    unlocked.onFire = true;

if(points >= 100)
    unlocked.pointCollector = true;

if(
    unlocked.firstStep &&
    unlocked.scholar &&
    unlocked.onFire &&
    unlocked.pointCollector
){
    unlocked.legend = true;
}

localStorage.setItem(
    "unlockedAchievements",
    JSON.stringify(unlocked)
);

achievements[0].unlocked = unlocked.firstStep || false;
achievements[1].unlocked = unlocked.scholar || false;
achievements[2].unlocked = unlocked.onFire || false;
achievements[3].unlocked = unlocked.pointCollector || false;
achievements[4].unlocked = unlocked.legend || false;

    achievementContainer.innerHTML = "";

    achievements.forEach(badge => {

if (
    badge.unlocked &&
    !shownAchievements.includes(badge.title)
) {
    showAchievement(badge);
}
        const div = document.createElement("div");

        div.className =
            badge.unlocked
            ? "badge unlocked"
            : "badge locked";

        div.innerHTML = `
            <div class="icon">${badge.icon}</div>

            <h4>${badge.title}</h4>

            <p>${badge.description}</p>
        `;

        achievementContainer.appendChild(div);

    });

}

/* =========================
   MOTIVATIONAL QUOTES
========================= */

const quotes = [

"Success is built one assignment at a time.",

"Small progress is still progress.",

"Study now. Shine later.",

"Discipline beats motivation.",

"Dream big. Work bigger.",

"Your future self is watching.",

"Great students are made, not born.",

"One more page. One more step."

];

function randomQuote(){

    if(!quote) return;

    quote.textContent =
    quotes[
        Math.floor(
            Math.random()*quotes.length
        )
    ];

}

if(newQuote){

    newQuote.onclick=randomQuote;

}

/* =========================
   TO DO LIST
========================= */

let todos =
JSON.parse(localStorage.getItem("todos")) || [];

function loadTodos(){

    if(!todoList) return;

    todoList.innerHTML="";

    todos.forEach((task,index)=>{

        const li=document.createElement("li");

        li.innerHTML=`
            ${task}
            <button>❌</button>
        `;

        li.querySelector("button").onclick=function(){

            todos.splice(index,1);

            localStorage.setItem(
                "todos",
                JSON.stringify(todos)
            );

            loadTodos();

        };

        todoList.appendChild(li);

    });

}

if(addTodo){

    addTodo.onclick=function(){

        if(todoInput.value.trim()=="") return;

        todos.push(todoInput.value);

        localStorage.setItem(
            "todos",
            JSON.stringify(todos)
        );

        todoInput.value="";

        loadTodos();

    };

}


const quizButton =
document.getElementById("quizButton");

if(quizButton){

quizButton.onclick=function(){

location.href="quiz.html";

};

}

const studyCard =
document.getElementById("studyCard");

if(studyCard){

studyCard.onclick=function(){

location.href="study.html";

};

}

const pomodoroCard =
document.getElementById("pomodoroCard");

if(pomodoroCard){

pomodoroCard.onclick=function(){

location.href="pomodoro.html";

};

}


/* =========================
   OPEN AI PAGE
========================= */

const openAI =
document.getElementById("openAI");

if (openAI) {

    openAI.onclick = function () {

        location.href = "ai.html";

    };

}

/* =========================
GLOBAL SEARCH
========================= */

const searchInput =
document.getElementById("globalSearch");

const searchResults =
document.getElementById("searchResults");

if(searchInput){

searchInput.addEventListener("input",function(){

const text=this.value.toLowerCase().trim();

if(text===""){

searchResults.classList.remove("show");

return;

}

searchResults.innerHTML="";

const results=[];

/* Homework */

Data.homework().forEach(hw=>{

const title=
typeof hw==="string"
?hw
:hw.title;

if(title.toLowerCase().includes(text)){

results.push({

title:title,

page:"homework.html"

});

}

});

/* Timetable */

Data.timetable().forEach(c=>{

if(c.subject.toLowerCase().includes(text)){

results.push({

title:c.subject,

page:"timetable.html"

});

}

});

/* Announcements */

Data.announcements().forEach(a=>{

const title=
typeof a==="string"
?a
:a.title;

if(title.toLowerCase().includes(text)){

results.push({

title:title,

page:"announcements.html"

});

}

});

/* Library */

const books=[

"Mathematics",

"English",

"Biology",

"Physics",

"Chemistry"

];

books.forEach(book=>{

if(book.toLowerCase().includes(text)){

results.push({

title:book,

page:"library.html"

});

}

});

/* Budget */

if("budget".includes(text) || "money".includes(text)){

results.push({

title:"Budget Planner",

page:"budget.html"

});

}

if(results.length===0){

searchResults.innerHTML=

"<div class='search-item'>No results found</div>";

}

else{

results.forEach(item=>{

const div=document.createElement("div");

div.className="search-item";

div.textContent=item.title;

div.onclick=function(){

window.location=item.page;

};

searchResults.appendChild(div);

});

}

searchResults.classList.add("show");

});

document.addEventListener("click",function(e){

if(!searchResults.contains(e.target) &&

e.target!==searchInput){

searchResults.classList.remove("show");

}

});

}

/* =========================
   ANIMATED COUNTERS
========================= */

function animateCounter(element, target, duration = 1200){

    if(!element) return;

    let start = 0;

    const startTime = performance.now();

    function update(currentTime){

        const progress = Math.min(

            (currentTime - startTime) / duration,

            1

        );

        const value = Math.floor(

            progress * target

        );

        element.textContent = value;

        if(progress < 1){

            requestAnimationFrame(update);

        }

        else{

            element.textContent = target;

        }

    }

    requestAnimationFrame(update);

}

/* =========================
SPLASH SCREEN
========================= */

window.addEventListener("load",()=>{

const splash=document.getElementById("splashScreen");

if(!splash) return;

if(sessionStorage.getItem("splashShown")){

splash.remove();

return;

}

sessionStorage.setItem("splashShown","true");

const fill=document.getElementById("loadingFill");

let progress=0;

const timer=setInterval(()=>{

progress+=2;

fill.style.width=progress+"%";

if(progress>=100){

clearInterval(timer);

setTimeout(()=>{

splash.style.opacity="0";

setTimeout(()=>{

splash.remove();

},800);

},300);

}

},40);

});

let shownAchievements =
JSON.parse(localStorage.getItem("shownAchievements")) || [];

function showAchievement(badge){

    if(shownAchievements.includes(badge.title))
        return;

    shownAchievements.push(badge.title);

    /* Give XP */

xp += 50;

if (xp >= level * 100) {

    xp -= level * 100;

    level++;

}

localStorage.setItem("xp", xp);

localStorage.setItem("level", level);

updateXP();

if (xpGain) {

    xpGain.textContent = "+50 XP";

    xpGain.classList.remove("show");

    void xpGain.offsetWidth;

    xpGain.classList.add("show");

}

    localStorage.setItem(
        "shownAchievements",
        JSON.stringify(shownAchievements)
    );

    popupTitle.textContent =
        badge.title;

    popupDescription.textContent =
        badge.description;

    popupIcon.textContent =
        badge.icon;

    achievementPopup.classList.add("show");
    confetti({

particleCount:150,

spread:90,

origin:{y:0.6}

});
    unlockSound.currentTime = 0;
unlockSound.play();

}

if(closeAchievement){

    closeAchievement.onclick=function(){

        achievementPopup.classList.remove("show");

    };

}