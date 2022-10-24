const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  let name, id, email, github, engineer;
  beforeEach(() => {
    name = "name";
    id = "3";
    email = "test@test.com";
    github = "test";
    engineer = new Engineer(name, id, email, github);
  });

  it("Should include name, id, email, and github", () => {
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.github).toEqual(github);
  });

  it("Should have role of Engineer", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });

  describe("getGithub", () => {
    it("Should retrieve the github username", () => {
      expect(engineer.getGithub()).toEqual(github);
    });
  });
});
