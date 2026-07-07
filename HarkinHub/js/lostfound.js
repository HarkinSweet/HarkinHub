const addItem = document.getElementById("addItem");


const type = document.getElementById("type");

const item = document.getElementById("item");

const locationInput = document.getElementById("location");

const description = document.getElementById("description");


const itemList = document.getElementById("itemList");



let items = JSON.parse(localStorage.getItem("lostFound")) || [];



displayItems();




addItem.onclick=function(){



if(
type.value === "" ||
item.value === "" ||
locationInput.value === "" ||
description.value === ""
){

alert("Fill all fields");

return;

}




let report = {


type:type.value,

item:item.value,

location:locationInput.value,

description:description.value


};



items.push(report);



saveItems();


displayItems();



type.value="";
item.value="";
locationInput.value="";
description.value="";


};






function displayItems(){


itemList.innerHTML="";



items.forEach((data,index)=>{


let row=document.createElement("tr");



row.innerHTML=`

<td>${data.type}</td>

<td>${data.item}</td>

<td>${data.location}</td>

<td>${data.description}</td>

<td>

<button class="delete">
Delete
</button>

</td>

`;



itemList.appendChild(row);




row.querySelector(".delete").onclick=function(){


items.splice(index,1);


saveItems();


displayItems();


};



});


}





function saveItems(){


localStorage.setItem(

"lostFound",

JSON.stringify(items)

);


}