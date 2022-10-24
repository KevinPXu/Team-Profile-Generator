const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }
  getSchool = function () {
    return this.school;
  };

  makeCard = function () {
    return `<div class="card" style="width: 18rem">
    <img class="bg-image" src="./Assets/Monkee.webp" alt="background image">
    <div class="card-header">${this.name} ${this.role}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.email}</li>
            <li class="list-group-item">${this.school}</li>
        </ul>
    </div>
  </div>`;
  };
}
module.exports = Intern;
