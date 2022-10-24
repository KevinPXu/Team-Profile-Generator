const Intern = require("../lib/Intern");

describe("Intern", () => {
  let name, id, email, school, intern;
  beforeEach(() => {
    name = "name";
    id = "3";
    email = "test@test.com";
    school = "test";
    intern = new Intern(name, id, email, school);
  });

  it("Should include name, id, email, and school", () => {
    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });

  it("Should have role of Intern", () => {
    expect(intern.getRole()).toEqual("Intern");
  });

  describe("getSchool", () => {
    it("Should retrieve the school", () => {
      expect(intern.getSchool()).toEqual(school);
    });
  });
});
