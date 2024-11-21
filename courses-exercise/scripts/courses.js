"use strict";

let url = "http://localhost:8081/api/courses/";

let coursesTBody = document.querySelector("#coursesTBody");

let coursesList = document.querySelector("#coursesList");

async function loadCourses() {
  let response = await fetch(url);

  let courses = await response.json();

  displayTable(courses);
  displayCards(courses);
}
loadCourses();

function displayTable(courses) {
  for (const course of courses) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = course.dept;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = course.courseNum;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = course.courseName;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = course.instructor;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerText = course.startDate;
    tr.appendChild(td5);

    coursesTBody.appendChild(tr);
  }
}

function displayCards(courses) {
  for (const course of courses) {
    createCourseCard(course.courseName, course.courseNum, course.dept, course.startDate, course.instructor);
  }
}

function createCourseCard(courseName, courseNumber, department, startDate, instructor) {
  
  const cardContainer = document.createElement("div");
  cardContainer.className = "card";
  cardContainer.style.width = "18rem";

  
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";


  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = courseName;

  
  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.textContent = `${courseNumber}, ${department}`;
 
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = `Starts: ${startDate}, Instructor: ${instructor}`;

  
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardContainer.appendChild(cardBody);


  coursesList.appendChild(cardContainer);
}
