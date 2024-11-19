"use strict";

// API URL
let api = "https://jsonplaceholder.typicode.com/users";


let dataTBody = document.querySelector("#dataTBody");


async function loadTable() {
 {
    // Fetch data from the API
    let response = await fetch(api); 


    
    let users = await response.json(); 

  
    for (let user of users) {
      let tr = document.createElement("tr"); 

      let tdName = document.createElement("td");
      tdName.innerText = user.name;
      tr.appendChild(tdName);

      let tdEmail = document.createElement("td");
      tdEmail.innerText = user.email;
      tr.appendChild(tdEmail);

      dataTBody.appendChild(tr);
    }
  }
}

loadTable();
