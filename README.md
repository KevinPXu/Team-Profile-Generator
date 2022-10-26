# Team-Profile-Generator

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- Node.js
- inquirer.js
- file systems
- Jest.js
- VS Code
- Git
- GitHub

## Summary

This project was created to explore node.js further and explore usages of Tests. In this class I used several packages including inquirer.js to prompt the user with questions about the position of the team members. I also used Jest.js to write testing suites to check if our functions and classes were constructing properly. I also was able to explore class construction and inheritance which allows me to create several objects with multiple methods for each object.

## Demonstration

Link to demonstrate how to use the application: https://drive.google.com/file/d/1k2hQhFNudXhJ1_CAbd53bkTlRTsytoKB/view

## Description

A simple terminal application that will dynamically create a HTML team page with cards of each member of a team. The team member titles are Manager, Engineer, and intern and each have unique prompts. After the prompts are completed, a completed and styled HTML page will be created in the current directory.

## Code Snippet

### Class construction example

```JavaScript
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
  }
```

### tests that the above manager class was properly constructed

```JavaScript
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
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/kevin-xu-4672a7215/)
[GitHub](https://github.com/KevinPXu)
