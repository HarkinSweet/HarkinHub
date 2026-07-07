const input=document.getElementById("announcementInput");

const button=document.getElementById("addAnnouncement");

const list=document.getElementById("announcementList");


let announcements=
JSON.parse(localStorage.getItem("announcements")) || [];


showAnnouncements();



button.onclick=function(){


let text=input.value.trim();


if(text===""){
alert("Write announcement");
return;
}


announcements.push(text);


saveAnnouncements();

showAnnouncements();


input.value="";


}




function showAnnouncements(){

list.innerHTML="";


announcements.forEach((item,index)=>{


let div=document.createElement("div");

div.className="announcement";


div.innerHTML=`

<p>📢 ${item}</p>

<button class="delete">
Delete
</button>

`;


list.appendChild(div);



div.querySelector(".delete").onclick=()=>{


announcements.splice(index,1);

saveAnnouncements();

showAnnouncements();


};


});


}




function saveAnnouncements(){

localStorage.setItem(
"announcements",
JSON.stringify(announcements)
);

}