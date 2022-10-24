const Employee = require("../lib/Employee");

describe("Employee", () => {
  let employee, name, id, email;
  beforeEach(() => {
    name = "name";
    id = 3;
    email = "test@gmail.com";
    employee = new Employee(name, id, email);
  });

  it("should contain name, id, and email", () => {
    expect(employee.name).toEqual(name);
    expect(employee.email).toEqual(email);
    expect(employee.id).toEqual(id);
  });

  it("Should have role of Employee", () => {
    expect(employee.getRole()).toEqual("Employee");
  });

  describe("getName", () => {
    it("should retrieve the name from the object", () => {
      expect(employee.getName()).toEqual(name);
    });
  });

  describe("getID", () => {
    it("should retrieve the id from the object", () => {
      expect(employee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should retrieve the email from the object", () => {
      expect(employee.getEmail()).toEqual(email);
    });
  });
});
