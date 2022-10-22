function Employee(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName(){}

Employee.prototype.getId(){}

Employee.prototype.getEmail(){}

Employee.prototype.getRole(){}

module.exports = Employee;