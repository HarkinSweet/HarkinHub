const homework = Data.homework();

const completion =
Math.min(homework.length * 10,100);

document.getElementById("completionPercent").textContent =
completion + "%";

document.getElementById("analyticsProgress").style.width =
completion + "%";

document.getElementById("analyticsProgressText").textContent =
completion + "% Complete";

animateCounter(

document.getElementById("analyticsStreak"),

Number(localStorage.getItem("studyStreak")) || 1

);

animateCounter(

document.getElementById("analyticsXP"),

Number(localStorage.getItem("xp")) || 0

);

animateCounter(

document.getElementById("analyticsLevel"),

Number(localStorage.getItem("level")) || 1

);

document.getElementById("analyticsBudget").textContent =
"₦"+(localStorage.getItem("budgetBalance")||0);

document.getElementById("analyticsPoints").textContent =
Data.housePoints();

new Chart(

document.getElementById("analyticsChart"),

{

type:"line",

data:{

labels:[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
],

datasets:[{

data:[2,3,4,5,6,7,homework.length],

fill:true,

tension:.4,

borderWidth:3

}]

},

options:{

plugins:{

legend:{display:false}

},

responsive:true

}

});

new Chart(

document.getElementById("performanceChart"),

{

type:"radar",

data:{

labels:[

"Homework",

"Budget",

"XP",

"Points",

"Attendance"

],

datasets:[{

data:[

completion,

80,

localStorage.getItem("xp")||0,

Data.housePoints(),

95

],

fill:true

}]

},

options:{

plugins:{

legend:{display:false}

}

}

});