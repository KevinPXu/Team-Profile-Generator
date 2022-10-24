const Manager = require("../lib/Manager");

describe("Manager", () => {
  let name, id, email, officeNum, manager;
  beforeEach(() => {
    name = "name";
    id = "3";
    email = "test@test.com";
    officeNum = "test";
    manager = new Manager(name, id, email, officeNum);
  });

  it("Should include name, id, email, and officeNum", () => {
    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNum);
  });

  it("Should have role of Manager", () => {
    expect(manager.getRole()).toEqual("Manager");
  });

  describe("getOfficeNum", () => {
    it("Should retrieve the officeNum", () => {
      expect(manager.getOfficeNum()).toEqual(officeNum);
    });
  });
});
