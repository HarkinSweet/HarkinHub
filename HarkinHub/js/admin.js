/* =========================
   TEACHER LOGIN GUARD
========================= */

if(localStorage.getItem("isTeacher")!=="true"){

    window.location.href="admin-login.html";

}

const saveHomework =
document.getElementById("saveHomework");

const saveAnnouncement =
document.getElementById("saveAnnouncement");

const savePoints =
document.getElementById("savePoints");

if(saveHomework){

saveHomework.onclick=function(){

const title=
document.getElementById("hwTitle").value;

const due=
document.getElementById("hwDue").value;

if(title=="") return;

let homework=

JSON.parse(

localStorage.getItem("homework")

)||[];

homework.push({

title:title,

due:due

});

localStorage.setItem(

"homework",

JSON.stringify(homework)

);

showToast("📚 Homework Added Successfully");

};

}

if(saveAnnouncement){

saveAnnouncement.onclick=function(){

const title=

document.getElementById(

"announcementTitle"

).value;

if(title=="") return;

let announcements=

JSON.parse(

localStorage.getItem(

"announcements"

)

)||[];

announcements.push({

title:title

});

localStorage.setItem(

"announcements",

JSON.stringify(announcements)

);


showToast("📢 Announcement Posted");


};

}

if(savePoints){

savePoints.onclick=function(){

const points=

Number(

document.getElementById(

"pointsInput"

).value

);

localStorage.setItem(

"housePoints",

points

);

showToast("🏆 House Points Updated");

};

}

const logout=

document.getElementById(
"teacherLogout"
);

if(logout){

logout.onclick=function(){

localStorage.removeItem(
"isTeacher"
);

window.location=
"admin-login.html";

};

}