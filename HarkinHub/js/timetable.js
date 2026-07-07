const addClass=document.getElementById("addClass");

const day=document.getElementById("day");
const subject=document.getElementById("subject");
const time=document.getElementById("time");
const room=document.getElementById("room");

const timetableBody=document.getElementById("timetableBody");


let classes=JSON.parse(localStorage.getItem("classes")) || [];


displayClasses();



addClass.onclick=function(){


if(
day.value===""||
subject.value===""||
time.value===""||
room.value===""
){

alert("Fill all fields");
return;

}


classes.push({

day:day.value,
subject:subject.value,
time:time.value,
room:room.value

});


saveClasses();

displayClasses();


day.value="";
subject.value="";
time.value="";
room.value="";


}




function displayClasses(){

timetableBody.innerHTML="";


classes.forEach((item,index)=>{


let row=document.createElement("tr");


row.innerHTML=`

<td>${item.day}</td>

<td>${item.subject}</td>

<td>${item.time}</td>

<td>${item.room}</td>

<td>
<button class="delete-btn">
Delete
</button>
</td>

`;


timetableBody.appendChild(row);



row.querySelector(".delete-btn").onclick=()=>{


classes.splice(index,1);

saveClasses();

displayClasses();


};


});


}



function saveClasses(){

localStorage.setItem(
"classes",
JSON.stringify(classes)
);

}