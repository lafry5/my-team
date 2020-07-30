const Manager = require("../lib/Manager.js")

test ("Can instantiate Manager instance", function() {  // Passes
    const testvalue = new Manager();
    expect(typeof(testvalue)).toBe("object");
})

test ("Can set officenumber through constructor arguments", function() {  // Passes
    const officenumber = 6023630253;
    const testvalue = new Manager("Laura", 54424, "lafry5@yahoo.com", "Manager", officenumber);
    expect(testvalue.officenumber).toBe(officenumber);
})

test ("Can get role via getRole function and result is Manager", function() {    // Passes
    const value = "Manager";
    const testvalue = new Manager("Laura", 54424, "lafry5@yahoo.com", value);
    expect(testvalue.getRole()).toBe(value);
})