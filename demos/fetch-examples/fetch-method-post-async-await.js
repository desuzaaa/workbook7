"use strict";

async function createData(data) {
  let promise = fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  let response = await promise;
  let responseData = await response.json();
  console.log(responseData);
}

let user = {
  name: "Aubrey Graham",
  username: "drake",
  email: "drake@youngmoney.com",
};

createData(user);
