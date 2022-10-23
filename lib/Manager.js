const { off } = require("process");
let Employee = require("./Employee");

function Manager(name, id, email, officeNumber){
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
}

Manager.prototype.getRole(){}

module.exports = Manager;