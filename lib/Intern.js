//imports employee parent class
const Employee = require("./Employee");

//creates the class and constructor for intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }

  //retrieves the school from the intern
  getSchool = function () {
    return this.school;
  };

  //creates the card for the intern
  makeCard = function () {
    return `
        <div class="card m-4 bg-secondary" style="width: 18rem">
          <div class="card-header text-light">${this.name} (${this.role})</div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Id: ${this.id}</li>
                  <li class="list-group-item"><a href = "mailto: ${this.email}">Send Email</a></li>
                  <li class="list-group-item">School: ${this.school}</li>
              </ul>
          </div>
        </div>`;
  };
}
module.exports = Intern;
