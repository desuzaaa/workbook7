"use strict"

let url = "http://localhost:8081/api/categories"

let shopByTypeSelect = document.querySelector("#shopByTypeSelect");
let categorySelect = document.querySelector("#categorySelect");

async function getCategories() {
  try {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("error", error.message);
  }
}
getCategories();