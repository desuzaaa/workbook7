let api = "https://swapi.dev/api/species/";

let speciesTBody = document.querySelector("#speciesTBody");

async function loadSpecies() {
  let response = await fetch(api);
  let data = await response.json();

  for (let race of data.results) {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerText = race.name;
    tr.appendChild(tdName);

    let tdClassification = document.createElement("td");
    tdClassification.innerText = race.classification;
    tr.appendChild(tdClassification);

    let tdDesignation = document.createElement("td");
    tdDesignation.innerText = race.designation;
    tr.appendChild(tdDesignation);

    let tdHeight = document.createElement("td");
    tdHeight.innerText = race.average_height;
    tr.appendChild(tdHeight);

    let tdSkinColors = document.createElement("td");
    tdSkinColors.innerText = race.skin_colors;
    tr.appendChild(tdSkinColors);

    let tdEyeColors = document.createElement("td");
    tdEyeColors.innerText = race.eye_colors;
    tr.appendChild(tdEyeColors);

    let tdHomeworld = document.createElement("td");
    tdHomeworld.innerText = race.homeworld || "Unknown";
    tr.appendChild(tdHomeworld);

    speciesTBody.appendChild(tr);
  }
}

loadSpecies();
