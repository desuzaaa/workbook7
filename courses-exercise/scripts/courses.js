"use strict"

let url = "http://localhost:8081/api/courses/";

let coursesTBody = document.querySelector("#coursesTBody")
console.log(coursesTBody);

async function loadCourses() {
    
    let response = await fetch(url);

    let courses = await response.json();

    for (const course of courses) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td")
        td1.innerText = course.dept
        tr.appendChild(td1)

        
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

        coursesTBody.appendChild(tr)
    }
}
loadCourses();