if ("Notification" in window) {

    Notification.requestPermission();

}

const display =
document.getElementById("timerDisplay");

const start =
document.getElementById("startTimer");

const pause =
document.getElementById("pauseTimer");

const reset =
document.getElementById("resetTimer");

const sessionCount =
document.getElementById("sessionCount");

let seconds = 1500;

let timer = null;

let sessions =
Number(localStorage.getItem("pomodoroSessions")) || 0;

sessionCount.textContent = sessions;

function updateDisplay(){

const mins =
Math.floor(seconds/60);

const secs =
seconds%60;

display.textContent =
String(mins).padStart(2,"0")
+
":"
+
String(secs).padStart(2,"0");

}

start.onclick=function(){

if(timer) return;

timer=setInterval(function(){

seconds--;

updateDisplay();

if(seconds<=0){

clearInterval(timer);

timer=null;

finishSession();

}

},1000);

};

pause.onclick=function(){

clearInterval(timer);

timer=null;

};

reset.onclick=function(){

clearInterval(timer);

timer=null;

seconds=1500;

updateDisplay();

};

function finishSession(){

sessions++;

localStorage.setItem(

"pomodoroSessions",

sessions

);

sessionCount.textContent=sessions;

let xp =
Number(localStorage.getItem("xp")) || 0;

xp += 25;

localStorage.setItem("xp",xp);

if (Notification.permission === "granted") {

    new Notification("🍅 Great Job!", {

        body: "Focus session completed! +25 XP earned."

    });

} else {

    alert("🎉 Focus Session Complete!\n+25 XP");

}
seconds=1500;

updateDisplay();

}

updateDisplay();