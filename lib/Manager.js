const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }

  getOfficeNum = function () {
    return this.officeNumber;
  };

  makeCard = function () {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">${this.name} ${this.role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.email}</li>
            <li class="list-group-item">${this.officeNumber}</li>
        </ul>
    </div>
  </div>`;
  };
}
module.exports = Manager;
