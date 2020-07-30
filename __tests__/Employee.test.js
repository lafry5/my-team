const Employee = require("../lib/Employee.js")

test ("Can instantiate Employee instance", function() {  // Passes
    const testvalue = new Employee();
    expect(typeof(testvalue)).toBe("object");
})

test ("Can set name through constructor arguments", function() {  // Passes
    const name = "Laura";
    const testvalue = new Employee(name);
    expect(testvalue.name).toBe(name);
})

test ("Can set id through constructor arguments", function() {  // Passes
    const value = 54424;
    const testvalue = new Employee("Laura", value);
    expect(testvalue.id).toBe(value);
})

test ("Can set email through constructor arguments", function() {   // Passes
    const value = "lafry5@yahoo.com";
    const testvalue = new Employee("Laura", 54424, value);
    expect(testvalue.email).toBe(value);
})


test ("Can get name via getName function", function() {  // Passes
    const value = "Laura";
    const testvalue = new Employee(value);
    expect(testvalue.getName()).toBe(value);
})

test ("Can get id via getId function", function() {      // Passes
    const value = "54424";
    const testvalue = new Employee("Laura", value);
    expect(testvalue.getId()).toBe(value);
})

test ("Can get email via getEmail function", function() {  // Passes
    const value = "lafry5@yahoo.com";
    const testvalue = new Employee("Laura", 54424, value);
    expect(testvalue.getEmail()).toBe(value);
})

test ("Can get role via getRole function and result is Employee", function() {    // Passes
    const value = "Employee";
    const testvalue = new Employee("Laura", 54424, "lafry5@yahoo.com");
    expect(testvalue.getRole()).toBe(value);
})

