const { Module } = require("module");
let Employee = require("./Employee");

function Engineer(name, id, email, github) {
  const role = "Engineer";
  Employee.call(this, name, id, email);
  this.github = github;
}

Engineer.prototype = Employee.prototype;

Engineer.prototype.getGithub = function () {
  return this.github;
};

Engineer.prototype.getRole = function () {
  return this.role;
};

module.exports = Engineer;
