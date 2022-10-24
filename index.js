const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
init();

async function init() {
  writeTitle();
  const managerInfo = await getManagerInfo();
  const { name, id, email, officeNum } = managerInfo;
  const manager = new Manager(name, id, email, officeNum);

  fs.appendFileSync("index.html", manager.makeCard(), (err) =>
    err ? console.log(err) : console.log("Successfully append index.html!")
  );
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

  fs.writeFileSync("index.html", htmlTitleContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

async function chooseRole() {
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
  return response;
}

async function getManagerInfo() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "officeNum",
      message: "What is your office number?",
    },
  ]);
  return response;
}

async function getInternInfo() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "officeNum",
      message: "What school did they attend?",
    },
  ]);
  return response;
}

async function getEngineerInfo() {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "officeNum",
      message: "What is your github username?",
    },
  ]);
  return response;
}
