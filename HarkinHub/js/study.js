const subject =
document.getElementById("studySubject");

const time =
document.getElementById("studyTime");

const add =
document.getElementById("addStudy");

const list =
document.getElementById("studyList");

let sessions =
JSON.parse(localStorage.getItem("study")) || [];

function loadStudy(){

list.innerHTML="";

sessions.forEach((s,index)=>{

const li=document.createElement("li");

li.innerHTML=`

<strong>${s.subject}</strong>

<span>${s.time} mins</span>

<button>❌</button>

`;

li.querySelector("button").onclick=function(){

sessions.splice(index,1);

save();

};

list.appendChild(li);

});

}

function save(){

localStorage.setItem(

"study",

JSON.stringify(sessions)

);

loadStudy();

}

add.onclick=function(){

if(subject.value==""||time.value=="") return;

sessions.push({

subject:subject.value,

time:Number(time.value)

});

subject.value="";

time.value="";

save();

};

loadStudy();