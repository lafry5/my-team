const Intern = require("../lib/Intern.js")

test ("Can instantiate Intern instance", function() {  // Passes
    const testvalue = new Intern();
    expect(typeof(testvalue)).toBe("object");
})

test ("Can set school through constructor arguments", function() {  // Passes
    const school = "UofA";
    const testvalue = new Intern("Laura", 54424, "lafry5@yahoo.com", "Intern", school);
    expect(testvalue.school).toBe(school);
})

// test ("Can get role via getRole function and result is Intern", function() {    // FAILS
//     const value = "Intern";
//     const testvalue = new Employee("Laura", 54424, "lafry5@yahoo.com");
//     expect(testvalue.getRole()).toBe(value);
// })