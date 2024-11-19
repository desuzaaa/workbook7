"use strict";

let idInput = document.querySelector("#idInput");
let detailsDiv = document.querySelector("#detailsDiv");

async function getToDo(id) {
  let promise = fetch("https://jsonplaceholder.typicode.com/todos/1" + id);
  let response = await promise;
  let todo = await response.json();
  detailsDiv.innerText = `Your title is ${todo.title}`
}

getToDo();

function showDetails() {
  let id = idInput.value;
  getToDo(id);
}

