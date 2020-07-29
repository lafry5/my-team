const Employee = require("../lib/Employee.js")

test ("Can instantiate Employee instance", function() {
    const E = new Employee();
    expect(typeof(E)).toBe("object");
})

test ("Can set name through constructor arguments", function() {
    const name = "Laura";
    const E = new Employee(name);
    expect(E.name).toBe(name);
})

/// Do same for ID, email, role

test ("Can get name via getName function", function() {
    const testValue = "Laura";
    const E = new Employee(testValue);
    expect(E.getName()).toBe(testValue);
})

/// Do same for ID, email, role


