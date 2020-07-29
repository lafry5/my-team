const Employee = require('./Employee')

class Engineer extends Employee {
    constructor( name, id, email, role, username) {
    // Take this from the Employee class; ie from 
    super(name, id, email, role, username)
    // Specific to the intern..
    this.username = username;
     }

     getUserName() {
        return this.username;
     }

     getRole() {
        return Engineer;
     }
}

// These are only creating the classes, then we need to make them available in the index.js to create new Interns
module.exports = Engineer;