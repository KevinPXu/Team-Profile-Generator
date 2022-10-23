const { Module } = require("module");
let Employee = require("./Employee");

function Engineer(name, id, email, github){
    Employee.call(this, name, id, email);
    this.github = github;
}

Engineer.prototype.getGithub(){}

Engineer.prototype.getRole(){}

module.exports = Engineer;