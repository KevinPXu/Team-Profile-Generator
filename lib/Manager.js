const { off } = require("process");
let Employee = require("./Employee");

function Manager(name, id, email, officeNumber) {
  const role = "Manager";
  Employee.call(this, name, id, email);
  this.officeNumber = officeNumber;
}
Manager.prototype = Employee.prototype;
Manager.prototype.getRole = function () {
  return this.role;
};

module.exports = Manager;
