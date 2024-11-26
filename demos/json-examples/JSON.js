"use strict"

let person =  {
    first: "Ed",
    last: "Sheeran",
};

// function stringify(obj) {
//     return ""
// } thats what its doing down there ↓


let personAsString = JSON.stringify(person)
console.log(personAsString);



let peeps = [
{
    first: "Ed",
    last: "Sheeran",
},

{
    first: "George",
    last: "Michael",
},

];

let peepsAsString = JSON.stringify(peeps);
console.log(peepsAsString);
