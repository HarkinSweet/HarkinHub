console.log("Budget Planner Loaded");

/* ==========================
   DOM ELEMENTS
========================== */

const incomeInput = document.getElementById("income");
const saveIncome = document.getElementById("saveIncome");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpense = document.getElementById("addExpense");

const balance = document.getElementById("balance");
const expenseList = document.getElementById("expenseList");

/* ==========================
   LOAD DATA
========================== */

let income =
Number(localStorage.getItem("income")) || 0;

let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

/* ==========================
   SAVE INCOME
========================== */

if(saveIncome){

saveIncome.onclick=function(){

    income = Number(incomeInput.value);

    localStorage.setItem("income",income);

    incomeInput.value="";

    updateBudget();

};

}

/* ==========================
   ADD EXPENSE
========================== */

if(addExpense){

addExpense.onclick=function(){

    if(
        expenseName.value.trim()=="" ||
        expenseAmount.value==""
    ) return;

    expenses.push({

        name:expenseName.value,

        amount:Number(expenseAmount.value)

    });

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

    expenseName.value="";
    expenseAmount.value="";

    updateBudget();

};

}

/* ==========================
   UPDATE SCREEN
========================== */

function updateBudget(){

    expenseList.innerHTML="";

    let totalSpent=0;

    expenses.forEach((item,index)=>{

        totalSpent+=item.amount;

        const li=document.createElement("li");

        li.innerHTML=`
            ${item.name}
            <strong>₦${item.amount}</strong>
            <button>❌</button>
        `;

        li.querySelector("button").onclick=function(){

            expenses.splice(index,1);

            localStorage.setItem(
                "expenses",
                JSON.stringify(expenses)
            );

            updateBudget();

        };

        expenseList.appendChild(li);

    });

    const remaining=income-totalSpent;

    balance.textContent=
    "₦"+remaining.toLocaleString();

    if(remaining<0){

        balance.style.color="red";

    }else{

        balance.style.color="green";

    }

}

updateBudget();