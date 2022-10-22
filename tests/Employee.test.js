const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should contain name, id, and email", () => {
    const name = "name";
    const id = 3;
    const email = "test@gmail.com";
    const employee = new Employee(name, id, email);
    expect(employee.name).toEqual(name);
    expect(employee.email).toEqual(email);
    expect(employee.id).toEqual(id);
  });

  describe("getName", () => {
    it("should retrieve the name from the object", () => {
      const name = "name";
      const employee = new Employee(name, id, email);
      expect(employee.getName()).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should retrieve the id from the object", () => {
      const name = "name";
      const id = 3;
      const email = "test@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.getId().toEqual(id));
    });
  });

  describe("getEmail", () => {
    it("should retrieve the email from the object", () => {
      const name = "name";
      const id = "3";
      const email = "test@gmail.com";
      const employee = new Employee(name, ide, email);
      expect(employee.getEmail().toEqual(email));
    });
  });
});
