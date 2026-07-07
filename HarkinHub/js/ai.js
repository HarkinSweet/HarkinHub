const chatBox =
document.getElementById("chatBox");

const input =
document.getElementById("userInput");

const send =
document.getElementById("sendBtn");

let messages =
JSON.parse(localStorage.getItem("chat")) || [];

function save(){

localStorage.setItem(

"chat",

JSON.stringify(messages)

);

}

function render(){

chatBox.innerHTML="";

messages.forEach(m=>{

const div=document.createElement("div");

div.className=
"message "+
m.type;

div.textContent=m.text;

chatBox.appendChild(div);

});

chatBox.scrollTop=
chatBox.scrollHeight;

}

function aiReply(text){

text=text.toLowerCase();

if(text.includes("hello"))

return "Hello! 👋 How can I help you today?";

if(text.includes("math"))

return "Try breaking the problem into smaller steps.";

if(text.includes("science"))

return "Science explains how the natural world works.";

if(text.includes("history"))

return "History helps us understand past events.";

if(text.includes("english"))

return "Remember to support your writing with clear ideas and good grammar.";

return "That's an interesting question! I'm still learning. Soon I'll connect to a real AI model.";
}

send.onclick=function(){

if(input.value=="") return;

messages.push({

type:"user",

text:input.value

});

messages.push({

type:"bot",

text:aiReply(input.value)

});

save();

render();

input.value="";

};

render();