"use strict"

async function getData() {
    let promise = fetch("https://jsonplaceholder.typicode.com/users")
    let response = await promise
    let data = await response.json()
    console.log(data);
    
}

getData()