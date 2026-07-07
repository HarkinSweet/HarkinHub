const addPoints = document.getElementById("addPoints");

const house = document.getElementById("house");
const student = document.getElementById("student");
const points = document.getElementById("points");
const reason = document.getElementById("reason");

const pointsList = document.getElementById("pointsList");



let records = JSON.parse(localStorage.getItem("housePoints")) || [];


displayPoints();



addPoints.onclick = function(){


if(
house.value === "" ||
student.value === "" ||
points.value === "" ||
reason.value === ""
){

alert("Please fill all fields");
return;

}



let record = {

house: house.value,

student: student.value,

points: points.value,

reason: reason.value

};



records.push(record);


savePoints();

displayPoints();



house.value="";
student.value="";
points.value="";
reason.value="";


};





function displayPoints(){


pointsList.innerHTML="";



records.forEach((item,index)=>{


let row=document.createElement("tr");



row.innerHTML=`

<td>${item.house}</td>

<td>${item.student}</td>

<td>${item.points}</td>

<td>${item.reason}</td>

<td>

<button class="delete">
Delete
</button>

</td>

`;



pointsList.appendChild(row);



row.querySelector(".delete").onclick=function(){


records.splice(index,1);


savePoints();

displayPoints();


};


});


}




function savePoints(){

localStorage.setItem(
"housePoints",
JSON.stringify(records)
);

}