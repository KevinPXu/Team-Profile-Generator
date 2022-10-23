const { describe } = require("yargs");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should include name, id, email, and github", () => {
    let name = "name";
    let id = "3";
    let email = "test@test.com";
    let github = "https://www.github.com/test";
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.github).toEqual(github);
  });
  describe("getGithub", () => {
    it("Should retrieve the github username", () => {
      let github = "gitUsername";
      const engineer = new Engineer(name, id, email, github);
      expect(engineer.getGithub()).toEqual(github);
    });
  });
});
