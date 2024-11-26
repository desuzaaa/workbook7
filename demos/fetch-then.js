"use strict";

//you get a promise object back which
//you hold as collateral for eventually getting the data you requested
let promise = fetch("https://jsonplaceholder.typicode.com/users");

promise.then(parseJSON).then(displayUsers);

//takes the body (after the blank line) in the http response
//and calls JSON.parse() on it to transform it from a json string to an array of objects
function parseJSON(response) {
  let arrayOfUserObjects = response.json(); //response.body's json string
  return arrayOfUserObjects; //returning the array is important because it keeps the promise chain going, i.e. the data will flow into the next then block
}

//receives the data you asked for and does something to display it
function displayUsers(users) {
  console.log(users);
}
