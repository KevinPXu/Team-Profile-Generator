//imports employee parent class
const Employee = require("./Employee");
//Engineer class and constructor function
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
  }
  // retrieves github username
  getGithub = function () {
    return this.github;
  };
  // makes the card for the Employee
  makeCard = function () {
    return `
        <div class="card m-4 bg-secondary" style="width: 18rem">
          <div class="card-header text-light">${this.name} (${this.role})</div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">id: ${this.id}</li>
                  <li class="list-group-item"><a href = "mailto: ${this.email}">Send Email</a></li>
                  <li class="list-group-item"><a href="https://www.github.com/${this.github}">${this.name}'s Github</a></li>
              </ul>
          </div>
        </div>`;
  };
}

module.exports = Engineer;
