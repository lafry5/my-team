const Employee = require('./lib/Employee')

class Intern extends Employee {
    constructor( name, id, email, role, school) {
    // Take this from the Employee class; ie from 
    super(name, id, email, role)
    // Specific to the intern..
    this.school = school;
     }

     getSchool() {
        return this.school;
     }

     getRole () {
        return Intern;
     }
}

// These are only creating the classes, then we need to make them available in the index.js to create new Interns
module.exports = Intern;