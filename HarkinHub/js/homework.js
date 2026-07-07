document.addEventListener("DOMContentLoaded", () => {

console.log("Homework JS Loaded");

const addBtn = document.getElementById("addBtn");
const input = document.getElementById("homeworkInput");
const list = document.getElementById("homeworkList");

if (!addBtn || !input || !list) {
    console.error("Homework elements not found in HTML");
    return;
}

let homework = [];

try {
    homework = JSON.parse(localStorage.getItem("homework")) || [];
} catch (e) {
    homework = [];
    localStorage.setItem("homework", "[]");
}

function save() {
    localStorage.setItem("homework", JSON.stringify(homework));
}


function render() {
    list.innerHTML = "";

    homework.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item}</span>
            <button class="delete">🗑</button>
        `;

        li.querySelector(".delete").onclick = () => {
            homework.splice(index, 1);
            save();
            render();
        };

        list.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {

    const value = input.value.trim();

    console.log("Clicked:", value);

    if (!value) return;

    homework.push(value);
    save();
    render();

    input.value = "";
});

render();

});