let Employee = require("./Employee");

function Intern(name, id, email, school) {
  const role = "Intern";
  Employee.call(this, name, id, email);
  this.school = school;
}
Intern.prototype = Employee.prototype;
Intern.prototype.getSchool = function () {
  return this.school;
};

Intern.prototype.getRole = function () {
  return this.role;
};

module.exports = Intern;
