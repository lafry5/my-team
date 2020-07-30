const Engineer = require("../lib/Engineer.js")

test ("Can instantiate Engineer instance", function() {  // Passes
    const testvalue = new Engineer();
    expect(typeof(testvalue)).toBe("object");
})

test ("Can set GitHub username through constructor arguments", function() {  // Passes
    const username = "lafry5";
    const testvalue = new Engineer("Laura", 54424, "lafry5@yahoo.com", "Engineer", username);
    expect(testvalue.username).toBe(username);
})

test ("Can get role via getRole function and result is Engineer", function() {    // Passes
    const value = "Engineer";
    const testvalue = new Engineer("Laura", 54424, "lafry5@yahoo.com", value);
    expect(testvalue.getRole()).toBe(value);
})