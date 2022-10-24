const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
init();

async function init() {
  writeTitle();
  let initResponse = await initPrompt();
  console.log(initResponse);
}

//writes the title of the html page when the page is initialized"
function writeTitle() {
  const htmlTitleContent = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <title>Document</title>
  </head>
  <body>
    <header class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Profile Page</h1>
      </div>
    </header> `;

  fs.writeFile("index.html", htmlTitleContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

function writeEngineerCard(engineerAnswer) {
  const engineerCardCont = `
  <div class="card" style="width: 18rem">
    <div class="card-header"></div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
            <li class="list-group-item"></li>
            <li class="list-group-item"></li>
        </ul>
    </div>
  </div>`;

  fs.appendFile("index.html", engineerCardCont, (err) =>
    err ? console.log(err) : console.log("Successfully append index.html!")
  );
}

function writeManagerCard(managerAnswer) {
  const managerCardCont = `
    <div class="card" style="width: 18rem">
      <div class="card-header"></div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
          </ul>
      </div>
    </div>`;

  fs.appendFile("index.html", managerCardCont, (err) =>
    err ? console.log(err) : console.log("Successfully appended index.html!")
  );
}

function writeInternCard(internAnswer) {
  const internCardCont = `
    <div class="card" style="width: 18rem">
      <div class="card-header"></div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
              <li class="list-group-item"></li>
          </ul>
      </div>
    </div>`;

  fs.appendFile("index.html", internCardCont, (err) =>
    err ? console.log(err) : console.log("Successfully appended index.html!")
  );
}

async function initPrompt() {
  const response = await inquirer.prompt({
    type: "list",
    message: "Which role would you like to add?",
    name: "role",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "I do not want to add any more staff",
    ],
  });
}
