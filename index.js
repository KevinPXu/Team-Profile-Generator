const fs = require("fs");
const inquirer = require("inquirer");

init();

function init() {
  writeTitle();
}

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
