const addBook=document.getElementById("addBook");

const bookName=document.getElementById("bookName");

const author=document.getElementById("author");

const bookList=document.getElementById("bookList");


let books=
JSON.parse(localStorage.getItem("books")) || [];


displayBooks();



addBook.onclick=function(){


if(bookName.value==="" || author.value===""){

alert("Fill all fields");
return;

}


books.push({

name:bookName.value,
author:author.value

});


saveBooks();

displayBooks();


bookName.value="";
author.value="";


}




function displayBooks(){


bookList.innerHTML="";


books.forEach((book,index)=>{


let row=document.createElement("tr");


row.innerHTML=`

<td>${book.name}</td>

<td>${book.author}</td>

<td>
<button class="delete">
Delete
</button>
</td>

`;


bookList.appendChild(row);



row.querySelector(".delete").onclick=()=>{


books.splice(index,1);

saveBooks();

displayBooks();


};


});


}



function saveBooks(){

localStorage.setItem(
"books",
JSON.stringify(books)
);

}