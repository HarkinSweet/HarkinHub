console.log("CampusConnect Loaded Successfully!");

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 10px 25px rgba(11,99,246,.3)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 5px 18px rgba(0,0,0,.08)";

});

});