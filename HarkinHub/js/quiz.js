let current=0;

let score=0;

let xp=
Number(localStorage.getItem("xp"))||0;

const question=
document.getElementById("question");

const answers=
document.getElementById("answers");

const scoreText=
document.getElementById("score");

const timer=
document.getElementById("timer");

function loadQuestion(){

const q=questions[current];

question.textContent=q.question;

answers.innerHTML="";

q.answers.forEach((a,index)=>{

const btn=document.createElement("button");

btn.className="answer";

btn.textContent=a;

btn.onclick=function(){

if(index===q.correct){

score++;

xp+=10;

}

scoreText.textContent=score;

document
.querySelectorAll(".answer")
.forEach(b=>b.disabled=true);

};

answers.appendChild(btn);

});

}

document
.getElementById("nextQuestion")
.onclick=function(){

current++;

if(current>=questions.length){

finishQuiz();

return;

}

loadQuestion();

};

function finishQuiz(){

localStorage.setItem("xp",xp);

alert(

"Quiz Finished!\n\nScore: "

+score+

"/"

+questions.length+

"\n\nXP Earned: "

+(score*10)

);

location.href="dashboard.html";

}

let seconds=300;

setInterval(()=>{

seconds--;

timer.textContent=seconds;

if(seconds<=0){

finishQuiz();

}

},1000);

loadQuestion();