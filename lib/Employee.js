//Employee parent class and constructor
class Employee {
  constructor(name, id, email) {
    this.role = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //retrieves the name of the current class
  getName = function () {
    return this.name;
  };

  //retrieves the id of the current class
  getId = function () {
    return this.id;
  };

  //retrieves the email of the current class
  getEmail = function () {
    return this.email;
  };

  //retrieves the role of the current class
  getRole = function () {
    return this.role;
  };
}

module.exports = Employee;
