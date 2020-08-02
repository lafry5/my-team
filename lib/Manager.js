const Employee = require('./Employee')

class Manager extends Employee {
    constructor( name, id, email, role, officenumber) {
    // Take this from the Employee class; ie from 
    super(name, id, email, role)
    // Specific to the intern..
    this.officenumber = officenumber;
     }

     getOfficeNumber() {
        return this.officenumber;
     }

     getRole() {
        return "Manager";
     }
}

// These are only creating the classes, then we need to make them available in the index.js to create new Interns
module.exports = Manager;