//imports employee parent class
const Employee = require("./Employee");

//creates the manager class and constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  //retrieves the office number from the manager
  getOfficeNum = function () {
    return this.officeNumber;
  };

  //makes the card for the manager
  makeCard = function () {
    return `
        <div class="card m-4 bg-secondary" style="width: 18rem">
          <div class="card-header text-light">${this.name} (${this.role})</div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Id: ${this.id}</li>
                  <li class="list-group-item"><a href = "mailto: ${this.email}">Send Email</a></li>
                  <li class="list-group-item">Office Number: ${this.officeNumber}</li>
              </ul>
          </div>
        </div>`;
  };
}
module.exports = Manager;
