// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.

  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      yesCount++;
    } else if (surveyData[i] === "No") {
      noCount++;
    } else if (surveyData[i] === "Maybe") {
      maybeCount++;
    }
  }

  outputEl.innerHTML = "Survey Data";
  outputEl.innerHTML += `<br> Yes: ${yesCount} <br/>`;
  outputEl.innerHTML += `<br> No: ${noCount} <br/>`;
  outputEl.innerHTML += `<br> Maybe: ${maybeCount} <br/>`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  let under18 = 0;
  let eighteenTothirtyfive = 0;
  let thirtysixtosixtyfive = 0;
  let above65 = 0;

  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      under18++;
    } else if (ageData[i] < 36) {
      eighteenTothirtyfive++;
    } else if (ageData[i] < 66) {
      thirtysixtosixtyfive++;
    } else if (ageData[i] > 65) {
      above65++;
    }
  }

  outputEl.innerHTML = "Age Data";
  outputEl.innerHTML += `<br>Under 18: ${under18} <br/>`;
  outputEl.innerHTML += `<br>18 to 35: ${eighteenTothirtyfive} <br/>`;
  outputEl.innerHTML += `<br>36 to 65: ${thirtysixtosixtyfive} <br/>`;
  outputEl.innerHTML += `<br>36 to 65: ${above65} <br/>`;
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2) {
      odd++;
    } else {
      even++;
    }
  }

  outputEl.innerHTML = "Number Data";
  outputEl.innerHTML += `<br>Even Numbers: ${even} <br/>`;
  outputEl.innerHTML += `Odd Numbers: ${odd}`;
  console.log(numberData);
}
