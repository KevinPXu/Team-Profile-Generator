let Employee = require("./Employee");

function Intern (name, id, email, school){
    Employee.call(this, name, id, email);
    this.school = school;
}

Intern.prototype.getSchool(){}

Intern.prototype.getRole(){}

module.exports = Intern;
