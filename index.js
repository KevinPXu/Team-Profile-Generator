//imports all required packages and classes
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//initial function call
init();

// init function that runs on page start to get manager information then inquire about who else to add to team.
async function init() {
  writeTitle();
  const managerInfo = await getManagerInfo();
  const { name, id, email, officeNum } = managerInfo;
  const manager = new Manager(name, id, email, officeNum);

  fs.appendFileSync("index.html", manager.makeCard(), (err) =>
    err ? console.log(err) : console.log("Successfully append index.html!")
  );
  do {
    //intentionally hoisting role for do/while loop
    var { role } = await chooseRole();
    //switch statement to instantiate class depending on user input.
    switch (role) {
      case "Manager":
        {
          const { name, id, email, officeNum } = await getManagerInfo();
          const manager = new Manager(name, id, email, officeNum);

          fs.appendFileSync("index.html", manager.makeCard(), (err) =>
            err
              ? console.log(err)
              : console.log("Successfully append index.html!")
          );
        }
        break;

      case "Engineer":
        {
          const { name, id, email, github } = await getEngineerInfo();
          const engineer = new Engineer(name, id, email, github);

          fs.appendFileSync("index.html", engineer.makeCard(), (err) =>
            err
              ? console.log(err)
              : console.log("Successfully append index.html!")
          );
        }
        break;

      case "Intern":
        {
          const { name, id, email, school } = await getInternInfo();
          const intern = new Intern(name, id, email, school);

          fs.appendFileSync("index.html", intern.makeCard(), (err) =>
            err
              ? console.log(err)
              : console.log("Successfully append index.html!")
          );
        }
        break;

      default:
        await closeHtml();
    }
  } while (role !== "I do not want to add any more staff");
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
    <link rel="stylesheet" href="./style.css"/>
    <title>Document</title>
  </head>
  <body>
    <header class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Profile Page</h1>
      </div>
    </header>
    <section class="d-flex flex-row justify-content-center">
  `;

  fs.writeFileSync("index.html", htmlTitleContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

//asks user to choose role.
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

// these functions get the proper information depending on which role they selected
// ---------------------------------------------------------------------------------------------------
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
      name: "school",
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
      name: "github",
      message: "What is your github username?",
    },
  ]);
  return response;
}
//--------------------------------------------------------------------------------------------------------------

// closes HTML document tags
function closeHtml() {
  const end = `
      </section>
    </body>
  </html>`;

  fs.appendFileSync("index.html", end, (err) =>
    err ? console.log(err) : console.log("Successfully append index.html!")
  );
}
