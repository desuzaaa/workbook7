"use strict";

async function getData() {
  try {
    let promise = fetch("https://httpstat.us/500"); //asking another computer for the data
    let response = await promise; //wait for the response message to come back from the server with the data in the body
    if (response.ok) {
      let data = await response.json(); //turn JSON string in the body into a JavaScript array of objects
      console.log(data);
    } else {
      throw new Error(`The response came back with an error : ${response.status} ${response.message} `);
    }
  } catch (error) {
    console.log("Error occured: " + error.message);
  }
}

getData();
